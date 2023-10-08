import { useMutation } from '@tanstack/react-query';
import { generateAudio } from '@/services';

export const GENERATE_AUDIOBOOK_CACHEKEY = 'addAudiobook';
export const useGenerateAudioBook = () => {
  const mutation = useMutation({
    mutationKey: [GENERATE_AUDIOBOOK_CACHEKEY],
    mutationFn: async (file: File) => {
      return await generateAudio(file);
    },
  });

  const handleGenerate = async (file: File) => await mutation.mutateAsync(file);

  return { handleGenerate, isLoading: mutation.isLoading };
};
