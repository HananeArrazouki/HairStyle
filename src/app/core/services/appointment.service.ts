import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { Appointment } from '../interfaces/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  momentjs:any = moment;
  
    private _appointment: Appointment[] = [
      {
        id: 1, 
        hairdressigId: 1, 
        makeupId:1, 
        nailsId:1,
        crearAt: this.momentjs().toISOString(), 
        dateTime: this.momentjs().add(1, 'days').toISOString()
      },
      {
        id: 2, 
        hairdressigId: 1, 
        makeupId:1, 
        nailsId:0,
        crearAt: this.momentjs().toISOString(), 
        dateTime: this.momentjs().add(1, 'days').toISOString()
      },
      {
        id: 3, 
        hairdressigId: 0, 
        makeupId:3, 
        nailsId:0,
        crearAt: this.momentjs().toISOString(), 
        dateTime: this.momentjs().add(1, 'days').toISOString()
      },
      {
        id: 4, 
        hairdressigId: 3, 
        makeupId:0, 
        nailsId:0,
        crearAt: this.momentjs().toISOString(), 
        dateTime: this.momentjs().add(1, 'days').toISOString()
      },]
      
    constructor() { }
    
    private _appointmentSubject: BehaviorSubject<Appointment[]> = new BehaviorSubject(this._appointment)
    public appointmentList$ = this._appointmentSubject.asObservable();
    id: number = this._appointment.length+1;

    getAppointments(){
      return this._appointment;
    }

    getAppointmentById(id: number){
      return this._appointment.find(a => a.id == id);
    }

    getAppointmentByMakeupId(id: number){
      return this._appointment.find(a => a.makeupId == id)
    }

    getAppointmentByhairdressingId(id: number) {
      return this._appointment.find(a => a.hairdressigId == id)
    }
    getAppointmentByNailsId(id: number){
      return this._appointment.find(a => a.nailsId == id)
    }

    deleteAppointmentById(id: number) {
      this._appointment = this._appointment.filter(a => a.id != id);
      this._appointmentSubject.next(this._appointment)
    }

    addAppointment(appointment: Appointment) {
      appointment.id = this.id++;
      appointment.crearAt = this.momentjs().toISOString();
      this._appointment.push(appointment);
      this._appointmentSubject.next(this._appointment)
    }

    updateAppointment(appointment: Appointment){
      var _appointment = this._appointment.find(a=>a.id==appointment.id);
      if(_appointment){
        _appointment.hairdressigId = appointment.hairdressigId;
        _appointment.makeupId = appointment.makeupId;
        _appointment.nailsId = appointment.nailsId;
        _appointment.crearAt = appointment.crearAt;
        _appointment.dateTime = appointment.dateTime;
    }
    this._appointmentSubject.next(this._appointment)
  }
}
