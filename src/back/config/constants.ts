export const Config = {
  NEXT_OPEN_IA_KEY: process.env.NEXT_OPEN_IA_KEY,
};

export const ExamQuestionsType = (learnLang: string, nativeLang: string) => ({
  Vocabulary: {
    key: 'vocabulary',
    prompText:
      'Vocabulary about the exam context.Example: Air Raid , Tank, Evacuee Children.(Depends of context)',
  },
  Translation: {
    key: 'translation',
    prompText: `Translating a sentence to ${nativeLang}.Put only the sentence without any aditional text to translate.`,
  },
  FillInTheBlank: {
    key: 'fillInTheBlank',
    prompText:
      'Fill-in-the-Blank with 4 alternatives and the answer is not always the letter a.Also the correct answer has only the alternative.',
  },
});
