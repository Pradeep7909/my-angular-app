import { Injectable } from '@angular/core';
import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import * as moment from 'moment-hijri';

@Injectable()
export class CustomDateFormatter extends CalendarDateFormatter {

  // Override the dayViewTitle method to format dates as per Hijri and Gregorian
  public dayViewTitle({ date }: DateFormatterParams): string {
    // Check if the current date is Gregorian or Hijri
    const isHijri = false; // Set this flag based on your preference or user input

    if (isHijri) {
      return moment(date).format('iYYYY-iMM-iDD'); // Hijri format
    } else {
      return moment(date).format('YYYY-MM-DD'); // Gregorian format
    }
  }

  // Other formatting methods can be customized here...
}
