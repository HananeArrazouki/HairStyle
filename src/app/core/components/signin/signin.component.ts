import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {

  form:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private modalCtrl:ModalController,
    private user:UserService,
    private router:Router
  ) { 
    this.form = this.formBuilder.group({
      identifier:["", [Validators.required, Validators.email]],
      password:["", Validators.required]
    });
    
  }

  ngOnInit() {}

  async register(){
    const modal = await this.modalCtrl.create({
      component:SignupComponent,
      cssClass:"modal-full-right-side"
    });

    modal.onDidDismiss().then(async(response)=>{
      try {
        if(response.role=='ok'){
          await this.user.register(response.data);
          this.router.navigate(['../../../pages/home'], {replaceUrl:true});
        }
        
      } catch (error) {
        console.log(error); 
      }
    });
    modal.present();
  }

  async onSignIn(){
    try {
      await this.user.login(this.form.value);
      this.router.navigate(['../../../pages/home'], {replaceUrl:true});
    } catch (error) {
      console.log(error);
    }
    
  }

  hasFormError(error: any){
    return this.form?.errors && Object.keys(this.form.errors).filter(e=>e==error).length==1;
  }
  
  errorsToArray(errors: any){
   
    if(errors && !('required' in errors))
      return [Object.keys(errors)[0]];
    else
      return [];
  }

}
