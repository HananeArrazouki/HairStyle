import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonOptionsComponent } from './components/salon-options/salon-options.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HairdressingComponent } from './components/hairdressing/hairdressing.component';
import { NailsComponent } from './components/nails/nails.component';
import { MakeupComponent } from './components/makeup/makeup.component';



@NgModule({
  declarations: [
    SalonOptionsComponent,
    HairdressingComponent,
    NailsComponent,
    MakeupComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(), 
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SalonOptionsComponent,
    HairdressingComponent,
    NailsComponent,
    MakeupComponent
  ]
})
export class CoreModule { }
