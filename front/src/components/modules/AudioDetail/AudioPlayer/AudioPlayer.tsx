import { Button, Progress } from '@nextui-org/react';
import { NextIcon, PauseCircleIcon, PreviousIcon } from './icons';

export const AudioPlayer = () => {
  return (
    <div className="flex flex-col col-span-6 md:col-span-8">
      <div className="flex flex-col mt-3 gap-1">
        <Progress
          aria-label="Music progress"
          classNames={{
            indicator: 'bg-primary',
            track: 'bg-primary-500/30',
          }}
          color="primary"
          size="sm"
          value={33}
        />
        <div className="flex justify-between">
          <p className="text-small">1:23</p>
          <p className="text-small text-foreground/50">4:32</p>
        </div>
      </div>

      <div className="flex w-full items-center justify-center">
        <Button
          isIconOnly
          className="data-[hover]:bg-foreground/10"
          radius="full"
          variant="light"
        >
          <PreviousIcon />
        </Button>
        <Button
          isIconOnly
          className="w-auto h-auto data-[hover]:bg-foreground/10"
          radius="full"
          variant="light"
        >
          <PauseCircleIcon size={54} />
        </Button>
        <Button
          isIconOnly
          className="data-[hover]:bg-foreground/10"
          radius="full"
          variant="light"
        >
          <NextIcon />
        </Button>
      </div>
    </div>
  );
};
