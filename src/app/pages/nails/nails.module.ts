import { NgModule } from '@angular/core';
import { NailsPageRoutingModule } from './nails-routing.module';
import { NailsPage } from './nails.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    NailsPageRoutingModule
  ],
  declarations: [NailsPage],
  exports: [NailsPage]
})
export class NailsPageModule {}
