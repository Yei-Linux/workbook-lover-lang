import { FormEvent, useEffect, useRef, useState } from 'react';

export const useAudioPlayerUI = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPaused, setPaused] = useState(true);

  const audioRef = useRef<HTMLAudioElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const play = () => audioRef.current?.play();

  const pause = () => audioRef.current?.pause();

  const onPlay = () => {
    const intervalId = setInterval(() => {
      const time = audioRef?.current?.currentTime;
      if (!time) return;
      setCurrentTime(time);
    }, 500);

    intervalRef.current = intervalId;
  };

  const onPause = () => {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
  };

  const handleTogglePlayer = () => {
    setPaused((prev) => !prev);
  };

  useEffect(() => {
    if (!isPaused) {
      play();
      onPlay();
      return;
    }
    pause();
    onPause();
  }, [isPaused]);

  return {
    audioRef,
    play,
    pause,
    isPaused,
    handleTogglePlayer,
    currentTime,
  };
};
