export const formatSecondsDuration = (secondsDuration: number) => {
  const hour = Math.floor(secondsDuration / 3600);

  const minutesRest = secondsDuration % 3600;
  const minutes = Math.floor(minutesRest / 60);

  const seconds = minutesRest % 60;

  return `${hour}h ${minutes}m ${seconds}s`;
};
