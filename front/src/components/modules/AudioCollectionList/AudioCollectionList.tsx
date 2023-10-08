import { AudioCard } from './AudioCard';
import { Search } from './Search';
import { PLACEHOLDER_WITHOUT_TITLE } from '@/mocks/audiobooks.mock';
import { AddPdfModal } from './AddPdfModal/AddPdfModal';
import { useFetchCollection } from './hooks/useFetchCollection';
import { Button, Pagination, Spinner } from '@nextui-org/react';
import { Fragment } from 'react';

export const AudioCollectionList = () => {
  const {
    audioCollectionList,
    page,
    search,
    udpateSearch,
    udpatePage,
    isLoading,
    totalPages,
  } = useFetchCollection();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">Discover 🤓</h1>
        <div className="w-full flex flex-wrap sm:flex-nowrap justify-between items-center gap-3">
          <Search onSearch={udpateSearch} value={search} />
          <AddPdfModal />
        </div>
      </div>

      <div className="flex flex-col gap-5 relative min-h-[500px]">
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center">
            <Spinner />
          </div>
        )}
        {audioCollectionList?.data?.map(
          ({ _id: { $oid }, title, duration }) => (
            <AudioCard
              key={$oid}
              id={$oid}
              audioBookTitle={!title ? PLACEHOLDER_WITHOUT_TITLE : title}
              timeSecondDuration={duration}
            />
          )
        )}
        {!!totalPages && (
          <Fragment>
            <Pagination
              total={totalPages}
              color="primary"
              page={page}
              onChange={(value) => udpatePage(value)}
            />
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="flat"
                color="primary"
                onClick={() =>
                  udpatePage(audioCollectionList?.metadata?.prev_page ?? page)
                }
              >
                Previous
              </Button>
              <Button
                size="sm"
                variant="flat"
                color="primary"
                onClick={() =>
                  udpatePage(audioCollectionList?.metadata?.next_page ?? page)
                }
              >
                Next
              </Button>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
