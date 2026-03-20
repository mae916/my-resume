import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// --- Rate Limiting (in-memory) ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

// --- Sanitize ---
function sanitize(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// --- CORS ---
const ALLOWED_ORIGINS = [
  'https://jagang.jinproject.xyz',
  'https://profile.jinproject.xyz',
  'http://localhost:5173',
  'http://localhost:3000',
];

function getCorsHeaders(origin: string | null) {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

// --- SES Client (lazy init) ---
let ses: SESClient | null = null;
function getSES(): SESClient {
  if (!ses) {
    ses = new SESClient({ region: process.env.AWS_REGION || 'ap-northeast-2' });
  }
  return ses;
}

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'ruchia916@naver.com';
const SES_FROM_EMAIL = process.env.SES_FROM_EMAIL || 'noreply@jinproject.xyz';

// --- Email Templates ---
function buildPortfolioEmail(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}) {
  const subject = `[포트폴리오 문의] ${sanitize(data.name)}님의 문의`;
  const html = `
    <div style="font-family: 'Apple SD Gothic Neo', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
      <h2 style="color: #1e293b; border-bottom: 2px solid #6366f1; padding-bottom: 12px;">포트폴리오 문의</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 10px; color: #64748b; width: 100px;">이름</td><td style="padding: 10px; color: #1e293b; font-weight: 600;">${sanitize(data.name)}</td></tr>
        <tr><td style="padding: 10px; color: #64748b;">이메일</td><td style="padding: 10px; color: #1e293b;">${sanitize(data.email)}</td></tr>
        ${data.company ? `<tr><td style="padding: 10px; color: #64748b;">회사/소속</td><td style="padding: 10px; color: #1e293b;">${sanitize(data.company)}</td></tr>` : ''}
        ${data.phone ? `<tr><td style="padding: 10px; color: #64748b;">연락처</td><td style="padding: 10px; color: #1e293b;">${sanitize(data.phone)}</td></tr>` : ''}
      </table>
      <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
        <p style="color: #64748b; margin: 0 0 8px; font-size: 13px;">문의 내용</p>
        <p style="color: #1e293b; margin: 0; white-space: pre-wrap; line-height: 1.6;">${sanitize(data.message)}</p>
      </div>
      <p style="margin-top: 16px; font-size: 12px; color: #94a3b8;">profile.jinproject.xyz에서 전송됨</p>
    </div>
  `;
  return { subject, html };
}

function buildInsuranceEmail(data: {
  name: string;
  phone: string;
  message?: string;
}) {
  const subject = `[보험 상담 문의] ${sanitize(data.name)}님의 콜백 요청`;
  const html = `
    <div style="font-family: 'Apple SD Gothic Neo', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
      <h2 style="color: #0033A0; border-bottom: 2px solid #0033A0; padding-bottom: 12px;">보험 상담 콜백 요청</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 10px; color: #64748b; width: 100px;">성함</td><td style="padding: 10px; color: #1e293b; font-weight: 600;">${sanitize(data.name)}</td></tr>
        <tr><td style="padding: 10px; color: #64748b;">연락처</td><td style="padding: 10px; color: #1e293b; font-weight: 600;">${sanitize(data.phone)}</td></tr>
      </table>
      ${
        data.message
          ? `<div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="color: #64748b; margin: 0 0 8px; font-size: 13px;">문의 내용</p>
              <p style="color: #1e293b; margin: 0; white-space: pre-wrap; line-height: 1.6;">${sanitize(data.message)}</p>
            </div>`
          : ''
      }
      <p style="margin-top: 16px; font-size: 12px; color: #94a3b8;">jagang.jinproject.xyz에서 전송됨</p>
    </div>
  `;
  return { subject, html };
}

// --- OPTIONS (CORS preflight) ---
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  return new NextResponse(null, { status: 204, headers: getCorsHeaders(origin) });
}

// --- POST ---
export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);

  // Rate limiting
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.' },
      { status: 429, headers: corsHeaders },
    );
  }

  // Parse body
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: '잘못된 요청입니다.' },
      { status: 400, headers: corsHeaders },
    );
  }

  // Detect form type: portfolio (has email) vs insurance (no email)
  const isPortfolio = typeof body.email === 'string' && body.email.length > 0;

  // Validate
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || name.length > 100) {
    return NextResponse.json(
      { error: '이름을 확인해주세요.' },
      { status: 400, headers: corsHeaders },
    );
  }

  if (isPortfolio) {
    const email = (body.email as string).trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 형식이 아닙니다.' },
        { status: 400, headers: corsHeaders },
      );
    }
    if (!message) {
      return NextResponse.json(
        { error: '문의 내용을 입력해주세요.' },
        { status: 400, headers: corsHeaders },
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { error: '문의 내용이 너무 깁니다.' },
        { status: 400, headers: corsHeaders },
      );
    }

    const company = typeof body.company === 'string' ? body.company.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const { subject, html } = buildPortfolioEmail({ name, email, company, phone, message });

    try {
      await getSES().send(
        new SendEmailCommand({
          Source: SES_FROM_EMAIL,
          Destination: { ToAddresses: [CONTACT_EMAIL] },
          ReplyToAddresses: [email],
          Message: {
            Subject: { Data: subject, Charset: 'UTF-8' },
            Body: { Html: { Data: html, Charset: 'UTF-8' } },
          },
        }),
      );
      return NextResponse.json({ success: true }, { headers: corsHeaders });
    } catch (err) {
      console.error('SES send error:', err);
      return NextResponse.json(
        { error: '이메일 전송에 실패했습니다.' },
        { status: 500, headers: corsHeaders },
      );
    }
  } else {
    // Insurance form
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    if (!phone) {
      return NextResponse.json(
        { error: '연락처를 입력해주세요.' },
        { status: 400, headers: corsHeaders },
      );
    }

    const { subject, html } = buildInsuranceEmail({ name, phone, message });

    try {
      await getSES().send(
        new SendEmailCommand({
          Source: SES_FROM_EMAIL,
          Destination: { ToAddresses: [CONTACT_EMAIL] },
          Message: {
            Subject: { Data: subject, Charset: 'UTF-8' },
            Body: { Html: { Data: html, Charset: 'UTF-8' } },
          },
        }),
      );
      return NextResponse.json({ success: true }, { headers: corsHeaders });
    } catch (err) {
      console.error('SES send error:', err);
      return NextResponse.json(
        { error: '이메일 전송에 실패했습니다.' },
        { status: 500, headers: corsHeaders },
      );
    }
  }
}
