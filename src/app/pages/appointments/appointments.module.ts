import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentsPageRoutingModule } from './appointments-routing.module';

import { AppointmentsPage } from './appointments.page';
import { CoreModule } from "../../core/core.module";

@NgModule({
    declarations: [AppointmentsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AppointmentsPageRoutingModule,
        CoreModule
    ]
})
export class AppointmentsPageModule {}
