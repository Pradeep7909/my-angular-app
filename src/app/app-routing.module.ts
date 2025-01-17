import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstscreenComponent } from './firstscreen/firstscreen.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

// Define the routes in the Routes array
const routes: Routes = [
  { path: '', component: FirstscreenComponent, pathMatch: 'full' }, // Default route
  { path: 'datepicker', component: DatePickerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
