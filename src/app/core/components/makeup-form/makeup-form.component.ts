import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Makeup } from '../../interfaces/makeup';

@Component({
  selector: 'app-makeup-form',
  templateUrl: './makeup-form.component.html',
  styleUrls: ['./makeup-form.component.scss'],
})
export class MakeupFormComponent {

  form: FormGroup;
  mode: "New" | "Edit" = "New";

  @Input('makeup') set makeup(makeup: Makeup) {
    if (makeup) {
      // this.form.controls.id.setValue(makeup.id);
      // this.form.controls.name.setValue(makeup.name);
      // this.form.controls.price.setValue(makeup.price);
      // this.form.controls.image.setValue(makeup.image);
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
    this.modalController.dismiss({ makeup: this.form.value, mode: this.mode });
  }

  onDismiss() {
    this.modalController.dismiss();
  }


}
