import {Component, OnInit} from '@angular/core';
import * as moment from 'moment-hijri';
import { DateType } from 'ngx-hijri-gregorian-datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent  implements OnInit{
  selectedDate: Date | undefined;
  selectedDateType  =  DateType.Hijri;

  ngOnInit(): void {
    console.log(moment.locale());
  }

}
