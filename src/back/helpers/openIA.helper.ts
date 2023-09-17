import OpenAI from 'openai';
import { Config } from '../config/constants';

const openai = new OpenAI({
  apiKey: Config.NEXT_OPEN_IA_KEY,
});

export const generateWorkbookBaseGivenPrompt = async (prompText: string) => {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: 'user', content: prompText }],
    model: 'gpt-3.5-turbo',
  };
  const choices = (await openai.chat.completions.create(params)).choices;

  return { choices };
};
