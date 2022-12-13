import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalonOptionsComponent } from './components/salon-options/salon-options.component';
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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './utils/translate';
import es from '@angular/common/locales/es'
import { DateTimeSelectableComponent } from './components/date-time-selectable/date-time-selectable.component';


registerLocaleData(es)

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
    AboutmeComponent,
    DateTimeSelectableComponent 
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(), 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
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
    AboutmeComponent,
    DateTimeSelectableComponent,
    HttpClientModule,
    TranslateModule
  ],
  providers:[
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },]
})
export class CoreModule { }
