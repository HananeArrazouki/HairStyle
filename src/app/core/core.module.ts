import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonOptionsComponent } from './components/salon-options/salon-options.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SalonOptionsComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(), 
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports: [
    SalonOptionsComponent
  ]
})
export class CoreModule { }
