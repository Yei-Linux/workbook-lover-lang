import { Button } from '@nextui-org/react';
import { AudioCard } from './AudioCard';
import { Search } from './Search';
import { audioBooks } from '@/mocks/audiobooks.mock';
import { AddPdfModal } from './AddPdfModal/AddPdfModal';

export const AudioCollectionList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">Discover 🤓</h1>
        <div className="w-full flex flex-wrap sm:flex-nowrap justify-between items-center gap-3">
          <Search />
          <AddPdfModal />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {audioBooks.map((props) => (
          <AudioCard key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
};
