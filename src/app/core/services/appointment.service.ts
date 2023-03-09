import { Injectable } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { Appointment } from '../interfaces/appointment';
import { ApiService } from './api.service';
import { FirebaseService } from './firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  momentjs:any = moment;
    
    private _appointmentSubject: BehaviorSubject<Appointment[]> = new BehaviorSubject([])
    public appointmentList$ = this._appointmentSubject.asObservable();

    unsubscr;
    constructor(
      private api:ApiService,
      private firebase:FirebaseService
    ) { 
      this.unsubscr = this.firebase.subscribeToCollection('appointment',this._appointmentSubject, this.mapAssignment);
    }

    ngOnDestroy(): void {
      this.unsubscr();
    }
  
    private mapAssignment(doc:DocumentData){
      return {
        id:0,
        docId:doc['data']().docId,
        hairdressigId:doc['data']().hairdressigId,
        makeupId:doc['data']().makeupId,
        nailsId:doc['data']().nailsId,
        createdAt:doc['data']().createdAt,
        dateTime:doc['data']().dateTime,
      };
    }

    getAppointments(){
      return this._appointmentSubject.value;
    }

    getAppointmentById(id:string){
      return new Promise<Appointment>(async (resolve, reject)=>{
        try {
          var response = (await this.firebase.getDocument('appointment', id));
          resolve({
            id:0,
            docId:response.id,
            hairdressigId:response.data['hairdressigId'],
            makeupId:response.data['makeupId'],
            nailsId:response.data['nailsId'],
            createdAt:response.data['createdAt'],
            dateTime:response.data['dateTime']
          });
        } catch (error) {
          reject(error);
        }
      });
    }

    async deleteAppointmentById(id:string){
      try {
        await this.firebase.deleteDocument('appointment', id);
      } catch (error) {
        console.log(error);
      }
    }

    async addAppointment(appointment: Appointment){
      try {
        await this.firebase.createDocument('appointment', appointment);  
      } catch (error) {
        console.log(error);
      }
    }

    async updateAppointment(appointment: Appointment){
      try {
        await this.firebase.updateDocument('appointment', appointment.docId, appointment);
      } catch (error) {
        console.log(error);
      }
      
    }

  //   getAppointmentById(id: number){
  //     return this._appointment.find(a => a.id == id);
  //   }

  //   getAppointmentByMakeupId(id: number){
  //     return this._appointment.find(a => a.makeupId == id)
  //   }

  //   getAppointmentByhairdressingId(id: number) {
  //     return this._appointment.find(a => a.hairdressigId == id)
  //   }
  //   getAppointmentByNailsId(id: number){
  //     return this._appointment.find(a => a.nailsId == id)
  //   }

  //   deleteAppointmentById(id: number) {
  //     this._appointment = this._appointment.filter(a => a.id != id);
  //     this._appointmentSubject.next(this._appointment)
  //   }

  //   addAppointment(appointment: Appointment) {
  //     appointment.id = this.id++;
  //     appointment.crearAt = this.momentjs().toISOString();
  //     this._appointment.push(appointment);
  //     this._appointmentSubject.next(this._appointment)
  //   }

  //   updateAppointment(appointment: Appointment){
  //     var _appointment = this._appointment.find(a=>a.id==appointment.id);
  //     if(_appointment){
  //       _appointment.hairdressigId = appointment.hairdressigId;
  //       _appointment.makeupId = appointment.makeupId;
  //       _appointment.nailsId = appointment.nailsId;
  //       _appointment.crearAt = appointment.crearAt;
  //       _appointment.dateTime = appointment.dateTime;
  //   }
  //   this._appointmentSubject.next(this._appointment)
  // }
}
