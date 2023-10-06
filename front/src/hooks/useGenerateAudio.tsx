import { generateAudio } from '@/services';

export const useGenerateAudio = () => {
  const handleGenerate = async (file: File) => {
    try {
      const response = await generateAudio(file);
      console.log('test', response);
    } catch (error) {
      return null;
    }
  };

  return { handleGenerate };
};
