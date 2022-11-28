import { NgModule } from '@angular/core';
import { HairdressingPageRoutingModule } from './hairdressing-routing.module';
import { HairdressingPage } from './hairdressing.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    HairdressingPageRoutingModule
  ],
  declarations: [HairdressingPage],
  exports: [HairdressingPage]
})
export class HairdressingPageModule {}
