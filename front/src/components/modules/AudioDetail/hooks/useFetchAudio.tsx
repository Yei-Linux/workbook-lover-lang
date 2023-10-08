import { getAudioBook } from '@/services';
import { TAudioBookByIdResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';

export interface IUseFetchAudio {
  id: string;
}
export const useFetchAudio = ({ id }: IUseFetchAudio) => {
  const { data, isLoading } = useQuery<TAudioBookByIdResponse>({
    queryKey: [`audiobook-${id}`],
    queryFn: async () => await getAudioBook(id),
  });

  return { data, isLoading };
};
