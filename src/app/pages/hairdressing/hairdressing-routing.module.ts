import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HairdressingPage } from './hairdressing.page';

const routes: Routes = [
  {
    path: '',
    component: HairdressingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HairdressingPageRoutingModule {}
