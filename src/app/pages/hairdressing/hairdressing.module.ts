import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HairdressingPageRoutingModule } from './hairdressing-routing.module';

import { HairdressingPage } from './hairdressing.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HairdressingPageRoutingModule
  ],
  declarations: [HairdressingPage],
  exports: [HairdressingPage]
})
export class HairdressingPageModule {}
