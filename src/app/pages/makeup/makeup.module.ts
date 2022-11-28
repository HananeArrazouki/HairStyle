import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeupPageRoutingModule } from './makeup-routing.module';

import { MakeupPage } from './makeup.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    MakeupPageRoutingModule
  ],
  declarations: [MakeupPage]
})
export class MakeupPageModule {}
