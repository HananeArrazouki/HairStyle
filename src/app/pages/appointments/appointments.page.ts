import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AppointmentFormComponent } from 'src/app/core/components/appointment-form/appointment-form.component';
import { Appointment } from 'src/app/core/interfaces/appointment';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { HairdressingService } from 'src/app/core/services/hairdressing.service';
import { MakeupService } from 'src/app/core/services/makeup.service';
import { NailsService } from 'src/app/core/services/nails.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage {

  constructor(
    private appointmentService: AppointmentService, 
    private hairdressingService: HairdressingService, 
    private makeupService: MakeupService,
    private nailsService: NailsService,
    private alertController: AlertController,
    private modalController: ModalController) { }

  getAppointments(){
    return this.appointmentService.appointmentList$
  }

  getAppointmentById(id : number){
    return this.appointmentService.getAppointmentById(id)
  }

  // getHairdressingSelectedById(id: number){
  //   return this.hairdressingService.getHairDressingOptionsById(id)
  // }

  // getNailsSelectedById(id: number){
  //   return this.nailsService.getNailsOptionsById(id)
  // }

  // getMakeupSelectedById(id: number){
  //   return this.makeupService.getMakeupOptionsById(id)
  // }

  deleteAppointmentByID(id: number) {
    this.appointmentService.deleteAppointmentById(id)
  }

  

  async onDelete(appointment: Appointment) {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: '¿Are you sure you want to delete this appointment?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            this.deleteAppointmentByID(appointment.id)
          },
        },
      ],
    });
    await alert.present();
  }

  onNewAppointment() {
    this.presentAppointmentForm(null);
  }

  onEditAppointment(appointment: Appointment) {
    this.presentAppointmentForm(appointment);
  }

  async presentAppointmentForm(appointment: Appointment | null) {
    const modalController = await this.modalController.create({
      component: AppointmentFormComponent,
      componentProps: {
        appointment: appointment
      }
    });
    modalController.present();
    modalController.onDidDismiss().then(result => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            this.appointmentService.addAppointment(result.data.appointment)
            break;
          case 'Edit':
            this.appointmentService.updateAppointment(result.data.appointment);
            break;
          default:
        }
      }
    });
  }

  onDeleteAppointment(appointment: Appointment) {
    this.onDelete(appointment);
  }

}
