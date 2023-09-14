export interface IPrompt {
  examContext: string;
  examLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  examTypePrompt: string;
}

const EXAM_QUESTIONS = 20;

export const prompt = ({ examContext, examLevel, examTypePrompt }: IPrompt) => `
    You are an english teacher.

    Exam Context: ${examContext}
    Exam Level: ${examLevel}
    Exam Number Questions: ${EXAM_QUESTIONS}
    Exam Type: ${examTypePrompt}
    
    Give me the exam in json format with the following format:
    { 
        "questions": [{
             "question": "...",
             "correctAnswer": "...",
             "alternatives": ["..."]
        }] 
    }
`;
