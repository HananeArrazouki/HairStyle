import { Injectable } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { Appointment } from '../interfaces/appointment';
import { FirebaseService } from './firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
    
    private _appointmentSubject: BehaviorSubject<Appointment[]> = new BehaviorSubject([])
    public appointmentList$ = this._appointmentSubject.asObservable();

    unsubscr;
    constructor(
      private firebase:FirebaseService
    ) { 
      this.unsubscr = this.firebase.subscribeToCollection('appointment',this._appointmentSubject, this.mapAppointment);
    }

    ngOnDestroy(): void {
      this.unsubscr();
    }
  
    private mapAppointment(doc:DocumentData){
      return {
        id:0,
        docId:doc['id'],
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

    getAppointmentById(id: string){
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

    getAppointmentsBy(field, value){
      return new Promise<Appointment[]>(async (resolve, reject)=>{
        try {
          var appointment = (await this.firebase.getDocumentsBy('appointment', field, value)).map<Appointment>(doc=>{
            return {
              id:0,
              docId:doc.id,
              personId:doc.data['hairdressigId'],
              taskId:doc.data['makeupId'],
              createdAt:doc.data['createdAt'],
            dateTime:doc.data['dateTime']
            }
          });
          resolve(appointment);  
        } catch (error) {
          reject("error getAppointmentsBy"+error);
        }
      });
    }
  
    getAppointmentByMakeupId(makeupId: string):Promise<Appointment[]>{
      return this.getAppointmentsBy('makeupId', makeupId)
    }

    getAppointmentByhairdressingId(hairdressigId:string) {
      return this.getAppointmentsBy('hairdressigId', hairdressigId)
    }
    getAppointmentByNailsId(nailsId:string){
      return this.getAppointmentsBy('nailsId', nailsId)
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
}
