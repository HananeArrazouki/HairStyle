import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PasswordValidation } from '../../utils/password-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  form:FormGroup;
  
  constructor(
    private formBuilder:FormBuilder,
    private modalCtrl:ModalController
  ) {
    this.form = this.formBuilder.group({
      first_name:["", Validators.required],
      last_name:["", Validators.required],
      email:["", [Validators.required, Validators.email]],
      password:["", Validators.required],
      confirmPassword:["", Validators.required]
    },{validator:[PasswordValidation.passwordMatch, PasswordValidation.passwordProto]});
  }

  onRegister(){
    this.modalCtrl.dismiss({
      email:this.form.value.email,
      username:this.form.value.email,
      password:this.form.value.password,
      firstName:this.form.value.first_name,
      lastName:this.form.value.last_name
    }, 'ok');
  }

  hasFormError(error: any){
    return this.form?.errors && Object.keys(this.form.errors).filter(e=>e==error).length==1;
  }
  
  errorsToArray(errors : any){
   
    if(errors && !('required' in errors))
      return [Object.keys(errors)[0]];
    else
      return [];
  } 

}
