// Career 관련 타입
export interface EducationItem {
  period: string;
  school: string;
  major: string;
}

export interface WorkItem {
  period: string;
  company: string;
  desc: string;
}

// Project 관련 타입
export interface ProjectItem {
  title: string;
  image: string;
  tags: string[];
  link: string;
  description: string;
}

// Skills 관련 타입
export interface SkillItem {
  name: string;
  icon: string;
  description: string;
}

// QnA 관련 타입
export interface QnAItem {
  question: string;
  highlight: string;
  answer: string;
}

// Navigation 관련 타입
export interface NavItem {
  href: string;
  label: string;
}
