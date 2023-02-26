import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Hairdressing } from '../../interfaces/hairdressing';

@Component({
  selector: 'app-hairdressing-form',
  templateUrl: './hairdressing-form.component.html',
  styleUrls: ['./hairdressing-form.component.scss'],
})
export class HairdressingFormComponent {

  form: FormGroup;
  mode: "New" | "Edit" = "New";

  @Input('hairdressing') set hairdressing(hairdressing: Hairdressing) {
    if (hairdressing) {
      this.form.controls['docId'].setValue(hairdressing.docId);
      this.form.controls['name'].setValue(hairdressing.name);
      this.form.controls['price'].setValue(hairdressing.price);
      this.form.controls['image'].setValue(hairdressing.image);
      this.mode = "Edit";
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) 
  { this.form = this.formBuilder.group({
      id: [null],
      docId: [''],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['']
    });
  }

  onSubmit() {
    this.modalController.dismiss({ hairdressing: this.form.value, mode: this.mode }, 'ok');
  }

  onDismiss() {
    this.modalController.dismiss(null, 'cancel');
  }
}
