import { generateWorkbookBaseGivenPrompt } from '@/back/helpers/cohereIA.helper';
import { NextResponse } from 'next/server';
import { prompt } from '@/back/config/prompts';
import { ExamQuestionsType } from '@/back/config/constants';

export async function POST() {
  const examContext = 'The Universe Origin';
  const examLevel = 'C2';

  const questionTypes = ExamQuestionsType('english', 'spanish');
  const questions = [];

  try {
    for (let questionType of Object.entries(questionTypes)) {
      const [key, exam] = questionType;
      const prompText = prompt({
        examContext,
        examLevel,
        examPrompt: exam.prompText,
        format: exam.format,
      });
      const IAResponse = await generateWorkbookBaseGivenPrompt(prompText);
      const textGenerated = IAResponse.body.generations?.[0]?.text;

      if (!textGenerated) throw new Error('Error generating exam with IA');

      const sectionExam = {
        questionType: key,
        content: JSON.parse(textGenerated),
      };
      questions.push(sectionExam);
    }

    return NextResponse.json({
      exam: questions,
    });
  } catch (error) {
    return NextResponse.json({
      error: (error as Error).message,
    });
  }
}
