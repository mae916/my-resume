const qnaList = [
  {
    question: '실무에서 어떤 경험이 가장 기억에 남나요?',
    highlight: '“내 개발이 실질적인 도움이 되는 순간.”',
    answer:
      'B2B 고객용 대시보드를 Chart.js로 리뉴얼 제안하고 구현했어요. 기존 Google Chart는 사용성과 디자인 모두 부족했거든요. 새 UI는 직관적이고 브랜드에 맞췄고, 실제로 영업팀이 미팅에서 활용하면서 고객 반응도 좋아졌습니다. "내 코드가 실무에서 쓰인다"는 걸 크게 체감한 순간이었어요.',
  },
  {
    question: '어떤 개발 방식이 본인에게 가장 잘 맞는다고 생각하나요?',
    highlight: '“완벽보다 빠른 실행 → 피드백으로 개선”',
    answer:
      '처음엔 완벽하게 계획을 세운 뒤 시작했지만, 실무에서는 빠르게 시도하고 고쳐나가는 게 훨씬 효과적이라는 걸 느꼈어요. 물류 파트너용 시스템 개발 때 먼저 배포하고, 피드백을 빠르게 반영하면서 사용자 만족도를 높일 수 있었습니다.',
  },
  {
    question: '협업할 때 가장 중요하게 생각하는 건 무엇인가요?',
    highlight: '“서로의 언어를 이해하려는 노력”',
    answer:
      '개발자일수록 커뮤니케이션이 중요하다고 생각해요. 이전 회사에서 마케팅팀이 GA 설정을 어려워했을 때, 함께 공부하고 가이드 문서를 만들어 도왔어요. 덕분에 마케팅 성과도 좋아졌고, 협업도 더 매끄러워졌습니다.',
  },
  {
    question: '프로젝트를 진행할 때 우선순위는 어떻게 정하나요?',
    highlight: '“핵심부터, 나머지는 순차 고도화.”',
    answer:
      '회의에서 아이디어가 쏟아졌지만, 모든 걸 다 구현할 순 없었어요. 클라이언트가 가장 중요하게 여긴 기능만 우선 구현하고, 나머지는 순차적으로 고도화하자고 제안했어요. 그 결과, 일정도 지키고 만족도도 높일 수 있었습니다.',
  },
  {
    question: '프리랜서 활동은 어떤 도움이 됐나요?',
    highlight: '“단순 실행보다, 스스로 제안하는 태도.”',
    answer:
      '프리랜서를 하면서 가장 크게 달라진 건 일에 대한 태도였어요. 단순히 클라이언트의 요청을 구현하는 데 그치지 않고, "이 상황에선 어떤 방식이 더 좋을까?"를 고민하고 직접 제안하는 일이 자연스러워졌습니다. 혼자 견적 내고, 소통하고, 일정까지 관리하면서 문제 해결력은 물론 커뮤니케이션의 중요성도 깊이 배웠습니다.',
  },
  {
    question: '계약이 안 됐을 때도 있었을 텐데, 어떤 태도로 임했나요?',
    highlight: '“계약보다 중요한 건 배움과 피드백.”',
    answer:
      '견적을 제안하고 논의하다가 계약까지 이어지지 못한 일도 있었지만, 실망하기보다는 항상 예의 있게 피드백을 부탁드렸어요. 부족했던 부분을 귀 기울여 듣고, 제안서 구성이나 응대 방식, 전달력 등을 계속 보완해 나갔습니다. 덕분에 제 방식과 커뮤니케이션을 객관적으로 바라보게 되었고, 실력 못지않게 태도도 성장할 수 있었어요.',
  },
];

export default function QNA() {
  return (
    <main className="py-20 text-[var(--foreground)]">
      <h2 className="text-center mb-10 text-2xl font-bold">
        <span className="text-gray-800">Q & A</span>
      </h2>
      <div className="space-y-8 mx-auto">
        {qnaList.map((q, idx) => (
          <div key={idx} className="space-y-2">
            <div className="rounded-xl px-4 py-3 text-lg underline underline-offset-4">
              <strong className="text-[var(--pointcolor-navy)]">Q. </strong>
              {q.question}
            </div>
            <div className="bg-white rounded-xl px-4 py-4 text text-gray-800 shadow">
              <p className="text-[var(--pointcolor-yellow)] font-semibold mb-2">
                {q.highlight}
              </p>
              <p className="leading-relaxed">{q.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
