import { NgModule } from '@angular/core';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
    declarations: [HomePage],
    imports: [
        CoreModule,
        HomePageRoutingModule,  
    ],
    exports: [HomePage]
})

export class HomePageModule {}