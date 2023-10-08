const padding = (time: number) => `${time}`.padStart(2, '0');

const validateTime = (time: number, part: 'h' | 'm' | 's') => {
  const timePadded = padding(time);
  if (part === 'h') return time ? `${timePadded}${part}` : null;

  return `${timePadded}${part}`;
};

const timeFormated = (hour: number, minutes: number, seconds: number) => ({
  hms: [
    validateTime(hour, 'h'),
    validateTime(minutes, 'm'),
    validateTime(seconds, 's'),
  ]
    .filter((item) => item != null)
    .join(' '),
  points: [hour, minutes, seconds]
    .filter((item, index) => (index === 0 && item === 0 ? false : true))
    .map((time) => padding(time))
    .join(':'),
});

export const formatSecondsDuration = (
  secondsDuration: number,
  timeFormatedType: 'hms' | 'points' = 'hms'
) => {
  const hour = Math.floor(secondsDuration / 3600);

  const minutesRest = secondsDuration % 3600;
  const minutes = Math.floor(minutesRest / 60);

  const seconds = Math.floor(minutesRest % 60);
  const formatTypes = timeFormated(hour, minutes, seconds)[timeFormatedType];

  return formatTypes;
};
