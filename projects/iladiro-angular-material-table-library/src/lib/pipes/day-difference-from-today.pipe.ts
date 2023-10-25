import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayDifferenceFromToday',
})
export class DayDifferenceFromTodayPipe implements PipeTransform {
  transform(value: Date | string): number {
    const dataOggi = +new Date();
    let diff = 0;
    if (value instanceof Date) {
      diff = +value - dataOggi;
    } else {
      diff = +new Date(value) - dataOggi;
    }
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    return Math.floor(diffInDays);
  }
}
