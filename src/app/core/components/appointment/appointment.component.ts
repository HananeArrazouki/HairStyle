import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment } from '../../interfaces/appointment';
import { Hairdressing } from '../../interfaces/hairdressing';
import { Makeup } from '../../interfaces/makeup';
import { Nails } from '../../interfaces/nails';
import { HairdressingService } from '../../services/hairdressing.service';
import { MakeupService } from '../../services/makeup.service';
import { NailsService } from '../../services/nails.service';
import { isLowResolution as lowres }  from '../../utils/screen';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;

  @Input('appointment') set appointment(appointment: Appointment){
    //this._appointment = appointment;
    //this.loadHairAndNailsAndMakeup(appointment);
   
  }
  constructor(
    private hairdressingSvc: HairdressingService,
    private nailsSvc: NailsService,
    private makeupSvc:MakeupService,
    //public locale: LocaleService
  ){
    
  }
/*
  private async loadHairAndNailsAndMakeup(appointment: Appointment){
    this._hairDressing.next(await this.hairdressingSvc.getHairDressingOptionsById(appointment.hairdressigId));
    //this._makeUp.next(await this.makeupSvc.getMakeupOptionsById(appointment.makeupId));
    //this._nails.next(await this.nailsSvc.getNailsOptionsById(appointment.nailsId));
  }
  get assignment(){
    return this._appointment;
  }

  isLowResolution = lowres;
  private _appointment: Appointment | undefined;

  private _hairDressing:BehaviorSubject<Hairdressing> = new BehaviorSubject<Hairdressing>(this._appointment);
  private _makeUp:BehaviorSubject<Makeup> = new BehaviorSubject<Makeup>(null);
  private _nails:BehaviorSubject<Nails> = new BehaviorSubject<Nails>(null);

  hairdressing$: Observable<Hairdressing> = this._hairDressing.asObservable();
  makeup$: Observable<Makeup> = this._makeUp.asObservable();
  nails$: Observable<Nails> = this._nails.asObservable();
  

  onEditClick(slide: IonItemSliding){
    slide.close();
    this.onEdit.emit(this.appointment);
  }

  onDeleteClick(slide:IonItemSliding){
    slide.close();
    this.onDelete.emit(this.appointment);
  }

  */
}
