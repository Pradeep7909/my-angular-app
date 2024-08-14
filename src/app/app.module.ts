import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstscreenComponent } from './firstscreen/firstscreen.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [AppComponent, FirstscreenComponent],
  imports: [BrowserModule, AppRoutingModule, NgImageSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
