import cohere from 'cohere-ai';
import { Config } from '../config/constants';

cohere.init(Config.NEXT_COHERE_IA_KEY);

export const generateWorkbookBaseGivenPrompt = async (prompText: string) => {
  const generateResponse = await cohere.generate({
    model: 'command',
    prompt: prompText,
    temperature: 1,
    max_tokens: 2000,
  });

  return generateResponse;
};
