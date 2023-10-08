import { useQueryClient } from '@tanstack/react-query';

export interface IUseRQCache {}
export const useRQCache = ({}: IUseRQCache) => {
  const queryClient = useQueryClient();

  const getFromRQMutation = (mutationKey: (string | number)[]) =>
    queryClient.getMutationCache().find({
      mutationKey,
    });

  const getFromRQQuery = (queryKey: string) =>
    queryClient.getQueryCache().get(queryKey);
  const setToRQCache = (
    queryKey: (string | number)[],
    updater: (prevValue: any) => any
  ) => queryClient.setQueryData(queryKey, updater);

  return { getFromRQMutation, getFromRQQuery, setToRQCache };
};
