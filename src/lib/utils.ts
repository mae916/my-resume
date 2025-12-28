/**
 * 현재 경로가 주어진 href와 일치하는지 확인
 * @param currentPath - 현재 페이지 경로
 * @param href - 비교할 링크 경로
 * @returns 활성 상태 여부
 */
export function isActiveLink(currentPath: string, href: string): boolean {
  // 홈 경로('/')는 정확히 일치할 때만 활성화
  if (href === '/') {
    return currentPath === '/';
  }
  // 다른 경로는 시작 부분이 일치하면 활성화
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

/**
 * 클래스명을 조건부로 결합
 * @param classes - 클래스명 또는 조건
 * @returns 결합된 클래스명 문자열
 */
export function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * 특정 ID의 요소로 스크롤 이동
 * @param id - 스크롤할 요소의 ID
 */
export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${id}`);
  }
}

/**
 * 외부 링크용 속성 생성
 * @returns 외부 링크에 필요한 속성 객체
 */
export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;
