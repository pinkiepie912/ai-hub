import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const getDatetime = (tzOffset: number | undefined = 0): dayjs.Dayjs => {
  return dayjs().utc().utcOffset(tzOffset);
};

export const getDate = ({ target, tzOffset = 0 }: { target: dayjs.Dayjs | undefined; tzOffset: number | undefined }): dayjs.Dayjs => {
  return (target ?? getDatetime(tzOffset)).set('hour', 0).set('minute', 0).set('second', 0).set('millisecond', 0);
};
