import type DateTime from './DateTime';

import Adapter from './dayjsAdapter';
// import Adapter from './momentAdapter';
// import Adapter from './datFnsAdapter';

const instance: DateTime = new Adapter();

export const getToday = () => instance.today();
export const getTodayUTC = () => instance.todayUTC();
export const getDateFormat = (date: Date | string, format: string, prevFormat?: string) => {
  return instance.format(date, format, prevFormat);
};
export const diffDate = (fromDate: Date | string, toDate: Date | string, unit?: string) => {
  return instance.diff(fromDate, toDate, unit);
};
export const getDay = (date: Date | string, day: number) => {
  return instance.day(date, day);
};
