import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonOptionsComponent } from './components/salon-options/salon-options.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HairdressingComponent } from './components/hairdressing/hairdressing.component';
import { NailsComponent } from './components/nails/nails.component';
import { MakeupComponent } from './components/makeup/makeup.component';
import { HairdressingSelectableComponent } from './components/hairdressing-selectable/hairdressing-selectable.component';
import { NailsSelectableComponent } from './components/nails-selectable/nails-selectable.component';
import { MakeupSelectableComponent } from './components/makeup-selectable/makeup-selectable.component';
import { HairdressingFormComponent } from './components/hairdressing-form/hairdressing-form.component';
import { NailsFormComponent } from './components/nails-form/nails-form.component';
import { MakeupFormComponent } from './components/makeup-form/makeup-form.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';



@NgModule({
  declarations: [
    SalonOptionsComponent,
    HairdressingComponent,
    NailsComponent,
    MakeupComponent,
    HairdressingSelectableComponent,
    NailsSelectableComponent,
    MakeupSelectableComponent,
    HairdressingFormComponent,
    NailsFormComponent,
    MakeupFormComponent,
    AboutmeComponent
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
    MakeupComponent,
    HairdressingSelectableComponent,
    NailsSelectableComponent,
    MakeupSelectableComponent,
    HairdressingFormComponent,
    NailsFormComponent,
    MakeupFormComponent,
    AboutmeComponent
  ]
})
export class CoreModule { }
