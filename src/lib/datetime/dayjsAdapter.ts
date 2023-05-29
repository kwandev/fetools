import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import ko from 'dayjs/locale/ko';
import utc from 'dayjs/plugin/utc';
import type { UnitType } from 'dayjs';

dayjs.extend(timezone);
dayjs.extend(utc);

import type DateTime from './DateTime';

export default class DayjsAdapter implements DateTime {
  today(): string {
    return dayjs().format();
  }

  todayUTC(): string {
    return dayjs().utc().format();
  }

  format(date: Date | string, format: string, prevFormat?: string): string {
    if (!!prevFormat) {
      return dayjs(date, prevFormat).locale(ko).format(format);
    }
    return dayjs(date).locale(ko).format(format);
  }

  diff(fromDate: Date | string, toDate: Date | string, unit?: UnitType): number {
    if (!!unit) {
      return dayjs(fromDate).diff(dayjs(toDate), unit);
    }
    return dayjs(fromDate).diff(dayjs(toDate));
  }

  day(date: string | Date, day: number): string {
    return dayjs(date).day(day).format();
  }
}
