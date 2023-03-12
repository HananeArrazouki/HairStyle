import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Appointment } from '../../interfaces/appointment';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})
export class AppointmentFormComponent {
  mode: "New" | "Edit" = "New";
  form: FormGroup;


  @Input('appointment') set appointment(appointment: Appointment) {
    if (appointment) {
      this.form?.controls['docId'].setValue(appointment.docId);
      this.form?.controls['hairdressigId'].setValue(appointment.hairdressigId);
      this.form?.controls['makeupId'].setValue(appointment.makeupId);
      this.form?.controls['nailsId'].setValue(appointment.nailsId);
      this.form?.controls['dateTime'].setValue(appointment.dateTime);
      this.mode = "Edit";
    }
  }

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,) { 

      this.form = this.formBuilder.group({
        id: [null],
        docId: [''],
        hairdressigId: [''],
        makeupId: [''],
        nailsId: [''],
        dateTime:[null],
      });      
    }


  onSubmit() {
    this.modalController.dismiss({ appointment: this.form?.value, mode: this.mode}, 'ok');
  }

  onDismiss() {
    this.modalController.dismiss(null, 'cancel');
  }

}
