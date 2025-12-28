import { Briefcase } from 'lucide-react';
import type { WorkItem } from '@/types';
import { workData } from '@/data/career';

export default function Career() {
  return (
    <section className="py-20 text-[var(--foreground)]" aria-labelledby="career-title">
      <h2 id="career-title" className="text-center mb-10 text-2xl font-bold">
        <span className="text-gray-800">Career</span>
      </h2>

      <article className="bg-white rounded-xl shadow p-6 max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold mb-7 flex items-center gap-3">
          <Briefcase
            className="w-10 h-10 p-2 text-[#272527] bg-accent rounded-full"
            aria-hidden="true"
          />
          Work Experience
        </h3>
        <ul className="space-y-6 border-l-2 text-primary border-accent pl-4">
          {workData.map((item: WorkItem, idx: number) => (
            <li key={idx}>
              <time className="text-gray-400">{item.period}</time>
              <p className="font-medium text-lg">{item.company}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
