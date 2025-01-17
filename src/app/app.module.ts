import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstscreenComponent} from './firstscreen/firstscreen.component';
import {NgImageSliderModule} from 'ng-image-slider';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {BsDatepickerModule, BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {CalendarDateFormatter, CalendarModule} from 'angular-calendar';

import * as moment from 'moment-hijri';
import {NgxHijriGregorianDatepickerModule} from "ngx-hijri-gregorian-datepicker";

@NgModule({
  declarations: [AppComponent, FirstscreenComponent, DatePickerComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: CalendarDateFormatter,
    }),
    FormsModule, NgxHijriGregorianDatepickerModule,
  ],
  providers: [{
    provide: BsDatepickerConfig,
    useFactory: () => {
      const config = new BsDatepickerConfig();
      // Configure Hijri calendar
      config.customTodayClass = 'custom-today-class';
      config.dateInputFormat = 'iYYYY-iMM-iDD'; // Hijri date format
      moment.locale('ar'); // Optional: Set the locale to Hijri-supported languages (like Arabic)
      return config;
    }
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
