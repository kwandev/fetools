export default interface DateTime {
  today(): string;
  todayUTC(): string;
  format(date: Date | string, format: string, prevFormat?: string): string;
  diff(fromDate: Date | string, toDate: Date | string, unit?: string): number;
  day(date: Date | string, day: number): string;
}
