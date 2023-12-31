/* eslint-disable react-hooks/exhaustive-deps */
import { PAGE_SIZE_AUDIOBOOKS } from '@/mocks/audiobooks.mock';
import { getMyAudioBooks } from '@/services';
import { TAudioBooksAllResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useFetchCollection = () => {
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const {
    data: audioCollectionList,
    isLoading,
    error,
  } = useQuery<TAudioBooksAllResponse>({
    queryKey: ['audiobooks', search, page],
    queryFn: async () => {
      return await getMyAudioBooks({
        search,
        page,
        size: PAGE_SIZE_AUDIOBOOKS,
      });
    },
  });

  const udpatePage = (page: number) => {
    setPage(page);
  };

  const udpateSearch = (searchText: string) => setSearch(searchText);

  useEffect(() => {
    const totalPag = audioCollectionList?.metadata?.total_pages;
    setTotalPages(totalPag);
  }, [audioCollectionList?.metadata?.total_pages]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  return {
    udpatePage,
    page,
    udpateSearch,
    search,
    audioCollectionList,
    isLoading,
    totalPages,
  };
};
