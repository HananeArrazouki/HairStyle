import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AppointmentFormComponent } from 'src/app/core/components/appointment-form/appointment-form.component';
import { Appointment } from 'src/app/core/interfaces/appointment';
import { AppointmentService } from 'src/app/core/services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage {

  constructor(
    private appointmentService: AppointmentService,
    private alertController: AlertController,
    private modalController: ModalController) { }

  getAppointments(){
    return this.appointmentService.appointmentList$
  }

  // getAppointmentById(id : number){
  //   return this.appointmentService.getAppointmentById(id)
  // }

  // getHairdressingSelectedById(id: number){
  //   return this.hairdressingService.getHairDressingOptionsById(id)
  // }

  // getNailsSelectedById(id: number){
  //   return this.nailsService.getNailsOptionsById(id)
  // }

  // getMakeupSelectedById(id: number){
  //   return this.makeupService.getMakeupOptionsById(id)
  // }

  async presentAppointmentForm(appointment: Appointment) {
    const modalController = await this.modalController.create({
      component: AppointmentFormComponent,
      componentProps: {
        appointment: appointment
      },
      cssClass:"modal-full-right-side"
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

  async onDelete(appointment) {
    const alert = await this.alertController.create({
      //mode: 'ios',
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
            this.appointmentService.deleteAppointmentById(appointment)
          },
        },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  onNewAppointment() {
    this.presentAppointmentForm(null);
  }

  onEditAppointment(appointment) {
    this.presentAppointmentForm(appointment);
  }

  

  onDeleteAppointment(appointment) {
    this.onDelete(appointment);
  }

}
