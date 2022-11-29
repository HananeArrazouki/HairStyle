import { NgModule } from '@angular/core';
import { MakeupPageRoutingModule } from './makeup-routing.module';

import { MakeupPage } from './makeup.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    MakeupPageRoutingModule
  ],
  declarations: [MakeupPage],
  exports: [MakeupPage]
})
export class MakeupPageModule {}
