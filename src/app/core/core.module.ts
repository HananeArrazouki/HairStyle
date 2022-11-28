import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonOptionsComponent } from './components/salon-options/salon-options.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HairdressingComponent } from './components/hairdressing/hairdressing.component';



@NgModule({
  declarations: [
    SalonOptionsComponent,
    HairdressingComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(), 
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports: [
    SalonOptionsComponent,
    HairdressingComponent
  ]
})
export class CoreModule { }
