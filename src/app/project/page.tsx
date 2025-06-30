import Image from 'next/image';

const projectList = [
  {
    title: '채팅 웹앱 Kotalk',
    image: '/images/project/kotalk.png',
    tags: ['React', 'Socket.io', 'JWT', 'Express', 'Docker'],
    link: 'https://github.com/mae916/kotalk',
    description: '실시간 채팅, JWT 인증, 무한스크롤을 구현한 채팅 웹앱입니다.',
  },
  {
    title: '보험 설계사 소개 웹사이트',
    image: '/images/project/jagang.png',
    tags: ['React', 'CSR', 'Responsive', 'QRCode', 'Docker'],
    link: 'https://github.com/mae916/Insurance-agent-profile',
    description:
      '실제 운영을 위해 제작된 보험 설계사용 PC/모바일 소개페이지이며, 상담 연결 기능이 있습니다.',
  },
  {
    title: '개인 포트폴리오 웹사이트',
    image: '/images/project/profile.png',
    tags: ['Next', 'Responsive', 'Docker'],
    link: 'https://github.com/mae916/My-resume',
    description: '실제 운영을 위해 제작된 PC/모바일 저의 이력서 사이트 입니다.',
  },
];

export default function Project() {
  return (
    <main className="py-20">
      <h2 className="mb-10 text-2xl font-bold text-center">
        <span className="text-gray-800">Project</span>
      </h2>
      <div className="max-w-6xl px-6 mx-auto">
        {/* <div className="flex items-center justify-end mb-10">
          <button className="px-4 py-1 text-sm transition border rounded-full border-primary text-primary hover:bg-primary hover:text-white">
            View All Projects →
          </button>
        </div> */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projectList.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              className="overflow-hidden transition shadow cursor-pointer rounded-xl hover:opacity-80 hover:shadow-lg h-fit lg:h-[520px]"
            >
              <div className="h-full overflow-hidden transition bg-white shadow rounded-xl hover:shadow-md">
                <Image
                  width={800}
                  height={450}
                  src={project.image}
                  alt={project.title}
                  className="object-cover object-left-top w-full border-gray-400 h-[360px]"
                />
                <div className="p-4 space-y-2">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-semibold border border-gray-200 rounded-full bg-accent text-black-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
