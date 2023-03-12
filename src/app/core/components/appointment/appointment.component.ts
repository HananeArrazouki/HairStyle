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
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent {

  private _appointment: Appointment;

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;

  @Input('appointment') set appointment(appointment: Appointment){
    this._appointment = appointment;
    this.loadAppointments(appointment);
   
  }
  private _hairDressing:BehaviorSubject<Hairdressing> = new BehaviorSubject<Hairdressing>(null);
  private _makeUp:BehaviorSubject<Makeup> = new BehaviorSubject<Makeup>(null);
  private _nails:BehaviorSubject<Nails> = new BehaviorSubject<Nails>(null);

  hairdressing$: Observable<Hairdressing> = this._hairDressing.asObservable();
  makeup$: Observable<Makeup> = this._makeUp.asObservable();
  nails$: Observable<Nails> = this._nails.asObservable();

  private async loadAppointments(appointment: Appointment){

    this._hairDressing.next(await this.hairdressingSvc.getHairDressingOptionsById(appointment.hairdressigId));
    this._makeUp.next(await this.makeupSvc.getMakeupOptionsById(appointment.makeupId));
    this._nails.next(await this.nailsSvc.getNailsOptionsById(appointment.nailsId));

  }

  constructor(
    private hairdressingSvc: HairdressingService,
    private nailsSvc: NailsService,
    private makeupSvc:MakeupService,
    public locale: LocalService
  ){
    
  }

  
  get appointment(){
    return this._appointment;
  }

  isLowResolution = lowres;
  

  onEditClick(slide: IonItemSliding){
    slide.close();
    this.onEdit.emit(this.appointment);
  }

  onDeleteClick(slide:IonItemSliding){
    slide.close();
    this.onDelete.emit(this.appointment);
  }

  
}
