import Image from 'next/image';
import profileImg from '@/../public/images/profile.jpg';

const hashTags = [
  '낙담없는피드백러버',
  '능동적인개발자',
  '꾸준한학습',
  '요구분석',
];

export default function Home() {
  return (
    <main>
      <section className="flex flex-col justify-center w-full py-20 lg:flex-row">
        <div>
          <Image
            src={profileImg}
            alt="내 프로필 이미지"
            className="lg:w-[520px] lg:h-[570px] w-[90%] object-cover object-bottom overflow-hidden shadow-xl rounded-4xl mx-auto"
          />
        </div>
        <div className="flex flex-col lg:ml-20 justify-evenly w-[95%] lg:w-[75%] mx-auto text-center mt-10 lg:mt-0 lg:text-left">
          <div>
            <p className="lg:text-4xl font-medium leading-relaxed text-3xl break-keep">
              기능보다 이유를 먼저 묻는,
              <br /> 프론트엔드 개발자&nbsp;
              <span className="text-[var(--pointcolor-yellow)] underline underline-offset-10">
                김혜진
              </span>
              &nbsp;입니다.
            </p>
            <p className="mt-10 break-keep">
              단순히 작동하는 기능보다,{' '}
              <span className="text-[var(--pointcolor-yellow)] font-semibold">
                왜 이렇게 동작해야 하는가
              </span>
              , 이 방식이 사용자에게 더 나은가를 먼저 고민합니다. <br />
              또한, 업무 중 마주친 문제는 그대로 넘기지 않고, 주말이나 퇴근
              후에라도 다시 복기하고 분석하는 습관을 갖고 있습니다.
              <br /> 이런 태도가 쌓여 단순히 구현하는 사람이 아닌,{' '}
              <span className="text-[var(--pointcolor-yellow)] font-semibold">
                사용자와 서비스의 흐름을 함께 설계하는 개발자
              </span>
              로 성장하고 있다고 믿습니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-10 mt-5 lg:mt-0 justify-center lg:justify-start">
            {hashTags.map((tag, index) => (
              <span
                key={index}
                className="text-sm px-3 py-1 rounded-full border border-[var(--pointcolor-navy)] text-[var(--pointcolor-navy)] font-medium bg-white"
              >
                <span className="text-[var(--pointcolor-yellow)]">#</span>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center text-lg justify-center lg:justify-start">
            <a
              href="https://github.com/mae916"
              target="_blank"
              className="bg-[var(--pointcolor-navy)] border-2 border-[var(--pointcolor-yellow)] text-[var(--background)] rounded-full h-full px-5 py-3 mr-5 hover:bg-[var(--pointcolor-yellow)] hover:border-[var(--pointcolor-navy)] "
            >
              Visit My Github &nbsp; &gt;
            </a>
            <a
              href="mailto:ruchia916@naver.com"
              className="border-2 border-[var(--foreground)] rounded-full h-full px-5 py-3 font-bold hover:text-[var(--background)] hover:bg-[var(--foreground)] bg-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
