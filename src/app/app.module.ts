import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstscreenComponent} from './firstscreen/firstscreen.component';
import {NgImageSliderModule} from 'ng-image-slider';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, FirstscreenComponent, DatePickerComponent],
  imports: [BrowserModule, AppRoutingModule, NgImageSliderModule, BsDatepickerModule.forRoot(),BrowserAnimationsModule, FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
