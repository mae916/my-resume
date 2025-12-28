import type { Metadata } from 'next';
import Image from 'next/image';
import { skills } from '@/data/skills';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    '김혜진의 기술 스택입니다. React, Vue.js, TypeScript, Express, Docker 등을 활용한 개발 경험을 확인해보세요.',
};

export default function Skills() {
  return (
    <section className="py-20 text-[var(--foreground)]" aria-labelledby="skills-title">
      <h2 id="skills-title" className="mb-10 text-2xl font-bold text-center">
        <span className="text-gray-800">Skills</span>
      </h2>
      <ul className="grid gap-6 mx-auto md:grid-cols-2">
        {skills.map((skill) => (
          <li key={skill.name}>
            <article className="flex items-start gap-4 p-5 bg-white shadow rounded-xl">
              <Image
                width={40}
                height={40}
                src={skill.icon}
                alt=""
                aria-hidden="true"
                className="object-contain w-10 h-10 mt-1"
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  {skill.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  {skill.description}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
