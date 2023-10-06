import { AudioInfo } from './AudioInfo';
import { AudioPlayer } from './AudioPlayer';

export const AudioDetail = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3 justify-between">
      <AudioInfo />
      <AudioPlayer />
    </div>
  );
};
