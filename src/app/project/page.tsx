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
      <h2 className="text-center mb-10 text-2xl font-bold">
        <span className="text-gray-800">Project</span>
      </h2>
      <div className="max-w-6xl mx-auto px-6">
        {/* <div className="flex justify-end items-center mb-10">
          <button className="border border-[var(--pointcolor-navy)] text-sm px-4 py-1 rounded-full text-[var(--pointcolor-navy)] hover:bg-[var(--pointcolor-navy)] hover:text-white transition">
            View All Projects →
          </button>
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectList.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              className="rounded-xl shadow hover:opacity-80 hover:shadow-lg transition cursor-pointer overflow-hidden h-fit lg:h-130"
            >
              <div className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-90 object-cover object-left-top border-gray-400"
                />
                <div className="p-4 space-y-2">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-[var(--pointcolor-yellow)] text-black-600 font-semibold border border-gray-200"
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
