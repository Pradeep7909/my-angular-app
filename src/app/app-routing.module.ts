import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstscreenComponent } from './firstscreen/firstscreen.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
