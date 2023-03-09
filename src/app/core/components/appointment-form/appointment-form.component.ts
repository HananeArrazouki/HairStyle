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
      this.form?.controls['name'].setValue(appointment.hairdressigId);
      this.form?.controls['price'].setValue(appointment.makeupId);
      this.form?.controls['image'].setValue(appointment.nailsId);
      this.mode = "Edit";
    }
  }

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,) { 

      this.form = this.formBuilder.group({
        id: [null],
        hairdressigId: [''],
        makeupId: [''],
        nailsId: ['']
      });      
    }


  onSubmit() {
    this.modalController.dismiss({ hairdressing: this.form?.value, mode: this.mode});
  }

  onDismiss() {
    this.modalController.dismiss();
  }
}
