import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Nails } from '../../interfaces/nails';

@Component({
  selector: 'app-nails-form',
  templateUrl: './nails-form.component.html',
  styleUrls: ['./nails-form.component.scss'],
})
export class NailsFormComponent {

  form: FormGroup;
  mode: "New" | "Edit" = "New";

  @Input('nails') set nails(nails: Nails) {
    if (nails) {
      this.form.controls['id'].setValue(nails.id);
      this.form.controls['name'].setValue(nails.name);
      this.form.controls['price'].setValue(nails.price);
      this.form.controls['image'].setValue(nails.image);
      this.mode = "Edit";
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) 
  { this.form = this.formBuilder.group({
      id: [null],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['']
    });
  }

  onSubmit() {
    this.modalController.dismiss({ nails: this.form.value, mode: this.mode });
  }

  onDismiss() {
    this.modalController.dismiss();
  }

}
