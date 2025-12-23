
export interface ResumeItem {
  year: string;
  content: string;
}

export interface ProjectItem {
  id: string;
  tags: string[];
  title: string;
  description: string;
  contribution?: string;
  date?: string;
  imageUrl: string;
  link?: string;
}

export interface StrengthItem {
  id: string;
  num: string;
  title: string;
  desc: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
}
