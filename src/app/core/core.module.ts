import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { SigninComponent } from '../pages/login/components/signin/signin.component';
import { SignupComponent } from '../pages/login/components/signup/signup.component';


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
    DateTimeSelectableComponent,
    AppointmentFormComponent,
    AppointmentComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(), 
    
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
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
    AboutmeComponent,
    DateTimeSelectableComponent,
    HttpClientModule,
    AppointmentFormComponent,
    AppointmentComponent,
    SigninComponent,
    SignupComponent
  ],
  providers:[
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },]
})
export class CoreModule { }
