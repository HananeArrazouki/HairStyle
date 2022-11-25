import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [HomePage],
    imports: [
        CoreModule,
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        
    ],
    exports: [HomePage]
})
export class HomePageModule {}
