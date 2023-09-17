export const Config = {
  NEXT_OPEN_IA_KEY: process.env.NEXT_OPEN_IA_KEY ?? '',
  NEXT_COHERE_IA_KEY: process.env.NEXT_COHERE_IA_KEY ?? '',
};

export const ExamQuestionsType = (learnLang: string, nativeLang: string) => ({
  Vocabulary: {
    key: 'vocabulary',
    format: `{ 
      "questions": [{
           "question": "...",
           "answer": "...",
           "alternatives": ["..."]
      }] 
    }
    `,
    prompText:
      'Vocabulary about the exam context.Example: Air Raid , Tank, Evacuee Children.(Depends of context)',
  },
  Translation: {
    key: 'translation',
    format: `{ 
      "questions": [{
           "question": "...",
           "questionTranslated": "..."
      }] 
    }
    `,
    prompText: `Question should be in ${learnLang} language and the traslation in ${nativeLang} language into questionTranslated field.`,
  },
  FillInTheBlank: {
    key: 'fillInTheBlank',
    prompText:
      'Fill-in-the-Blank question with 4 alternatives where should have at least one fill in the blank in the question and the answer.',
    format: `{ 
        "questions": [{
             "question": "...",
             "answer": "...",
             "alternatives": ["..."]
        }] 
      }`,
  },
});
