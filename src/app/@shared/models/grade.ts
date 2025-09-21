export const GradeAttributesMapping = {
  grade: 'Grade',
  description: 'Description',
};

export interface Grade {
  grade: string;
  description: string;
  points?: number;
  color?: string;
}
