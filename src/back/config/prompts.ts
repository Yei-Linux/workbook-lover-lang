export interface IPrompt {
  examContext: string;
  examLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  examPrompt: string;
  format: string;
}

const EXAM_QUESTIONS = 5;

export const prompt = ({
  examContext,
  examLevel,
  examPrompt,
  format,
}: IPrompt) => `
    You are an english teacher.

    Exam Context: ${examContext}
    Exam Level: ${examLevel}
    Exam Number Questions: ${EXAM_QUESTIONS}
    Exam Type: ${examPrompt}
    
    Give me the exam in json format with the following format:
    ${format}
`;
