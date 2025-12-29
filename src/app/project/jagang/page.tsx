import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: '보험 설계사 소개 웹사이트 - 삼성생명 FC 프로필 페이지',
  description: '삼성생명 보험설계사를 위한 모바일 최적화 프로필 소개 페이지. QR코드를 통한 빠른 접근과 상담 연결 기능 제공.',
};

const features = [
  {
    title: '모바일 최적화',
    description: '명함 QR코드 스캔을 통한 접근을 고려해 모바일 퍼스트로 설계. 터치 친화적 UI와 빠른 로딩 속도 구현.',
  },
  {
    title: '원페이지 스크롤',
    description: '부드러운 스크롤 애니메이션과 섹션 기반 네비게이션으로 직관적인 정보 탐색 경험 제공.',
  },
  {
    title: '상담 연결 기능',
    description: '카카오톡 1:1 채팅, 전화 연결, 문자 보내기 등 다양한 상담 채널을 원클릭으로 연결.',
  },
  {
    title: '반응형 디자인',
    description: 'Tailwind CSS를 활용한 PC/태블릿/모바일 완벽 대응. 어떤 기기에서도 일관된 브랜드 경험 제공.',
  },
  {
    title: '보험 사례 소개',
    description: '실제 고객 케이스를 카드 형태로 시각화하여 보험의 필요성과 혜택을 직관적으로 전달.',
  },
  {
    title: 'Docker 배포',
    description: 'Docker 컨테이너화로 AWS EC2에 배포. Nginx 리버스 프록시와 SSL 인증서 적용으로 안정적인 서비스 운영.',
  },
];

const techStack = [
  'React 19',
  'TypeScript',
  'Tailwind CSS',
  'Vite',
  'Docker',
  'Nginx',
  'AWS EC2',
];

const sections = [
  'Header - 프로필 사진 및 소개',
  'About - 설계사 경력 및 전문 분야',
  'Cases - 보험 가입 사례 카드',
  'Contact - 상담 연결 버튼 (카카오톡, 전화, 문자)',
  'Footer - 회사 정보 및 저작권',
];

export default function JagangPage() {
  return (
    <section className="section">
      {/* Back Button */}
      <Link
        href="/project"
        className="inline-flex items-center gap-2 text-muted hover:text-light transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        <span className="text-sm font-medium">프로젝트 목록</span>
      </Link>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
        <div>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Profile Website
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-light mb-3">
            보험 설계사 소개
          </h1>
          <p className="text-muted text-lg">
            삼성생명 보험설계사를 위한 모바일 최적화 프로필 페이지
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://github.com/mae916/Insurance-agent-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://jagang.jinproject.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>사이트 방문</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-10">
        {techStack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Main Screenshot */}
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-dark-200 mb-10">
        <Image
          src="/images/project/jagang.png"
          alt="보험 설계사 소개 웹사이트 메인 화면"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Project Info */}
      <div className="grid lg:grid-cols-2 gap-6 mb-16">
        <div className="card">
          <h2 className="text-lg font-semibold text-light mb-4">프로젝트 개요</h2>
          <div className="space-y-3 text-sm">
            {[
              { label: '참여 기간', value: '2025.12' },
              { label: '참여 인원', value: '1명 (개인 프로젝트)' },
              { label: '담당 역할', value: '기획, 디자인, 퍼블리싱, 프론트엔드, 배포' },
              { label: '프로젝트 유형', value: '프로필 소개 원페이지' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <span className="text-muted min-w-[100px]">{item.label}</span>
                <span className="font-medium text-light">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-light mb-4">페이지 구성</h2>
          <ul className="grid grid-cols-1 gap-2">
            {sections.map((section) => (
              <li key={section} className="flex items-start gap-2 text-sm text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>{section}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Background */}
      <div className="card mb-16">
        <h2 className="text-lg font-semibold text-light mb-4">프로젝트 배경</h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>
            지인 보험설계사의 요청으로 시작한 프로젝트입니다. 기존에는 명함만으로 고객에게 정보를 전달했지만,
            <span className="text-light"> QR코드를 통해 접근할 수 있는 디지털 프로필 페이지</span>가 필요했습니다.
          </p>
          <p>
            고객이 명함의 QR코드를 스캔하면 설계사의 프로필, 전문 분야, 실제 보험 사례를 한눈에 확인하고,
            바로 카카오톡이나 전화로 상담을 요청할 수 있습니다.
            <span className="text-light"> 실제로 운영 중인 서비스</span>로, 고객 상담 전환율 향상에 기여하고 있습니다.
          </p>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-light text-center mb-10">주요 기능 및 기술</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="card group hover:border-accent/30">
              <h3 className="text-base font-semibold text-light mb-2 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
