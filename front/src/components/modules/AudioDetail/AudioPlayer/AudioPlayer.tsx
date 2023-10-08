import { Button, Progress } from '@nextui-org/react';
import { PauseCircleIcon } from './icons';
import { FC, useMemo } from 'react';
import { formatSecondsDuration } from '../../AudioCollectionList/AudioCard/utils';
import { useAudioPlayerUI } from '../hooks/useAudioPlayerUI';
import { computeProgressAudioPlayer } from './utils';
import { PlayIcon } from './icons/PlayIcon';

export interface IAudioPlayer {
  audioSrc: string;
  audioDuration: number;
}
export const AudioPlayer: FC<IAudioPlayer> = ({ audioSrc, audioDuration }) => {
  const { audioRef, isPaused, handleTogglePlayer, currentTime } =
    useAudioPlayerUI();
  const durationUI = useMemo(
    () => formatSecondsDuration(audioDuration, 'points'),
    [audioDuration]
  );
  const currentTimeUI = useMemo(
    () => formatSecondsDuration(currentTime, 'points'),
    [currentTime]
  );
  const playerPercent = useMemo(
    () => computeProgressAudioPlayer(currentTime, audioDuration),
    [currentTime, audioDuration]
  );

  return (
    <div className="flex flex-col col-span-6 md:col-span-8">
      <audio
        ref={audioRef}
        id="song"
        className="block w-full max-w-md mx-auto hidden"
        controls
      >
        <source src={audioSrc} type="audio/mpeg" />
      </audio>

      <div className="flex flex-col mt-3 gap-1">
        <Progress
          aria-label="Music progress"
          classNames={{
            indicator: 'bg-primary',
            track: 'bg-primary-500/30',
          }}
          color="primary"
          size="sm"
          value={playerPercent}
        />
        <div className="flex justify-between">
          <p className="text-small">{currentTimeUI}</p>
          <p className="text-small text-foreground/50">{durationUI}</p>
        </div>
      </div>

      <div className="flex w-full items-center justify-center">
        <Button
          isIconOnly
          className="w-auto h-auto data-[hover]:bg-foreground/10"
          radius="full"
          variant="light"
          onClick={handleTogglePlayer}
        >
          {!isPaused ? <PauseCircleIcon size={54} /> : <PlayIcon size={54} />}
        </Button>
      </div>
    </div>
  );
};
