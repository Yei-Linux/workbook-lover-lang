import OpenAI from 'openai';
import { Config } from '../config/constants';

const openai = new OpenAI({
  apiKey: Config.NEXT_OPEN_IA_KEY,
});

export const generateWorkbookBaseGivenPrompt = async () => {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: 'user', content: '' }],
    model: 'gpt-3.5-turbo',
  };
  const completion: OpenAI.Chat.ChatCompletion =
    await openai.chat.completions.create(params);
};
