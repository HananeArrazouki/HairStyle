import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NailsPageRoutingModule } from './nails-routing.module';

import { NailsPage } from './nails.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    NailsPageRoutingModule
  ],
  declarations: [NailsPage]
})
export class NailsPageModule {}
