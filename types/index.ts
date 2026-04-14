export type SkillLevel = "beginner" | "intermediate" | "advanced";
export type CardStatus = "not-started" | "in-progress" | "completed";

export interface TechCard {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  level: SkillLevel;
  status: CardStatus;
  progress: number; // 0–100
  tags: string[];
}
