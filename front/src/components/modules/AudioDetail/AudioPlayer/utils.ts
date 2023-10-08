export const computeProgressAudioPlayer = (
  currentTime: number,
  totalTime: number
) => {
  return (currentTime / totalTime) * 100;
};
