/* eslint-disable react-hooks/exhaustive-deps */
import { useRQCache } from '@/hooks/useRQCache';
import { useEffect } from 'react';
import { GENERATE_AUDIOBOOK_CACHEKEY } from './useGenerateAudioBook';

export type TUpdater<T> = (value: T) => void;
export interface IUseUpdateAudiobooksCollectionUI {
  udpatePage: TUpdater<number>;
  udpateSearch: TUpdater<string>;
}
export const useUpdateAudiobooksCollectionUI = ({
  udpatePage,
  udpateSearch,
}: IUseUpdateAudiobooksCollectionUI) => {
  const { getFromRQMutation, setToRQCache } = useRQCache({});
  const newAudioBook = getFromRQMutation([GENERATE_AUDIOBOOK_CACHEKEY]);

  useEffect(() => {
    if (!newAudioBook) return;
    const newItemToInsert = (newAudioBook?.state?.data as any)?.data;
    if (!newItemToInsert) return;

    udpatePage(1);
    udpateSearch('');
    setToRQCache(['audiobooks', '', 1], (prev) =>
      !prev
        ? prev
        : {
            ...prev,
            data: [newItemToInsert, ...prev?.data],
          }
    );
  }, [newAudioBook]);

  return {};
};
