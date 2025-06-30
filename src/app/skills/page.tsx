import Image from 'next/image';

const skills = [
  {
    name: 'React',
    icon: '/icons/react.svg',
    description:
      'JSX를 활용한 UI 구성 및 Virtual DOM을 통한 성능 최적화를 이해하고 있습니다. 상태 관리 라이브러리(예: Recoil)와 함께 컴포넌트 간 데이터 흐름을 관리하는 방법을 익혔습니다.',
  },
  {
    name: 'Vue.js',
    icon: '/icons/vue.svg',
    description:
      '반응형 데이터 바인딩과 컴포넌트 기반 아키텍처를 통해 효율적인 UI를 구성하는 방법을 이해하고 있습니다. Vue의 생명주기 훅을 활용하여 컴포넌트의 상태와 동작을 관리할 수 있습니다.',
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    description:
      '정적 타입 시스템을 통해 코드의 안정성과 가독성을 높일 수 있다는 점에서 선호하며, 타입 추론과 제너릭을 활용해 유연한 코드 작성 경험이 있습니다.',
  },
  {
    name: 'MySQL',
    icon: '/icons/mysql.svg',
    description:
      '관계형 데이터베이스의 구조와 SQL 쿼리를 통해 CRUD 작업을 수행할 수 있으며, JOIN을 활용한 효율적인 데이터 조회 방법을 익혔습니다.',
  },
  {
    name: 'Express',
    icon: '/icons/express.svg',
    description:
      'RESTful API 설계 원칙과 미들웨어를 활용한 요청/응답 처리 방법을 이해하고 있으며, 서버 구축과 라우팅, 오류 처리까지 경험해봤습니다.',
  },
  {
    name: 'Docker',
    icon: '/icons/docker.svg',
    description:
      'Dockerfile, docker-compose를 작성해 프론트엔드와 백엔드, 데이터베이스를 각각 컨테이너로 분리하고, 효율적인 로컬 개발 환경을 구성한 경험이 있습니다.',
  },
];

export default function Skills() {
  return (
    <main className="py-20 text-[var(--foreground)]">
      <h2 className="text-center mb-10 text-2xl font-bold">
        <span className="text-gray-800">Skills</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-5 rounded-xl shadow flex gap-4 items-start bg-white"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 object-contain mt-1"
            />
            <div>
              <h3 className="text-lg font-semibold text-[var(--pointcolor-navy)]">
                {skill.name}
              </h3>
              <p className="text-sm mt-2 text-gray-700 leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
