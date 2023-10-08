import { IAudioCard } from '@/components/modules/AudioCollectionList/AudioCard';

export const PLACEHOLDER_WITHOUT_TITLE = 'AudioBook Without Title';
export const PAGE_SIZE_AUDIOBOOKS = 3;
export const audioBooks: Array<IAudioCard> = [
  {
    id: '1',
    audioBookTitle: 'Advanced Algorithms',
    timeSecondDuration: 3600,
  },
  {
    id: '2',
    audioBookTitle: 'History Horror',
    timeSecondDuration: 3650,
  },
  {
    id: '3',
    audioBookTitle: 'Bib Bang Theory',
    timeSecondDuration: 4680,
  },
];
