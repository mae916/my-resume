// 경력 시작 연도
export const CAREER_START_YEAR = 2022;

// 경력 연차 자동 계산 (2022년 기준)
export const getYearsOfExperience = () => {
  return new Date().getFullYear() - CAREER_START_YEAR + 1;
};

// 경력 연차 문자열 (예: "4+")
export const getYearsOfExperienceLabel = () => {
  return `${getYearsOfExperience()}+`;
};
