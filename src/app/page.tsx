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
        <p className="inline-block mb-10 text-3xl font-medium leading-normal text-center lg:hidden">
          기능보다 이유를 먼저 묻는,
          <br /> 프론트엔드 개발자&nbsp;
          <br className="block lg:hidden" />
          <span className="underline text-accent underline-offset-8">
            김혜진
          </span>
          &nbsp;입니다.
        </p>
        <div>
          <Image
            width={520}
            height={570}
            src={profileImg}
            alt="내 프로필 이미지"
            className="lg:w-[520px] lg:h-[570px] w-[90%] object-cover object-bottom overflow-hidden shadow-xl rounded-[32px] mx-auto"
          />
        </div>
        <div className="flex flex-col lg:ml-20 justify-evenly w-[95%] lg:w-[75%] mx-auto text-center mt-10 lg:mt-0 lg:text-left">
          <div>
            <p className="hidden text-3xl font-medium leading-normal lg:leading-relaxed lg:text-4xl lg:inline-block">
              기능보다 이유를 먼저 묻는,
              <br /> 프론트엔드 개발자&nbsp;
              <span className="underline text-accent underline-offset-8">
                김혜진
              </span>
              &nbsp;입니다.
            </p>
            <p className="mb-3 lg:mt-10 lg:mb-0">
              단순히 작동하는 기능보다,&nbsp; <br className="block lg:hidden" />
              <span className="font-semibold text-accent">
                왜 이렇게 동작해야 하는가,
              </span>
              <br />
              이 방식이 사용자에게 <br className="block lg:hidden" /> 더
              나은가를 먼저 고민합니다. <br />
              또한, 업무 중 마주친 문제는
              <br className="block lg:hidden" />
              &nbsp;그대로 넘기지 않고,&nbsp;
              <br className="block lg:hidden" />
              주말이나 퇴근 후에라도 <br className="block lg:hidden" /> 다시
              복기하고 분석하는 습관을 <br className="block lg:hidden" />
              가지고 있습니다.
              <br /> 이런 태도가 쌓여 <br className="block lg:hidden" />
              단순히 구현하는 사람이 아닌,&nbsp;
              <br className="block lg:hidden" />
              <span className="font-semibold text-accent">
                사용자와 서비스의 흐름을
                <br className="block lg:hidden" /> 함께 설계하는 개발자
              </span>
              로<br className="block lg:hidden" /> 성장하고 있다고 믿습니다.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-5 mb-10 lg:mt-0 lg:justify-start">
            {hashTags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-white border rounded-full border-primary text-primary"
              >
                <span className="text-accent">#</span>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center text-lg lg:justify-start">
            <a
              href="https://github.com/mae916"
              target="_blank"
              className="bg-primary text-[var(--background)] rounded-full h-full px-5 py-3 mr-5 hover:bg-accent hover:border-primary "
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
