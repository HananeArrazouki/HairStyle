import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { MakeupFormComponent } from 'src/app/core/components/makeup-form/makeup-form.component';
import { Makeup } from 'src/app/core/interfaces/makeup';
import { MakeupService } from 'src/app/core/services/makeup.service';

@Component({
  selector: 'app-makeup-page',
  templateUrl: './makeup.page.html',
  styleUrls: ['./makeup.page.scss'],
})
export class MakeupPage {

  mode: "Normal" | "Edit" = "Normal";

  constructor(
    private _makeUpService : MakeupService,
    private alertController : AlertController,
    private modalController : ModalController) { }

  getMakeupOptions() {
    return this._makeUpService.getMakeupOptions()
  }

  getMakeupOptionsById(id: number) {
    return this._makeUpService.getMakeupOptionsById(id)
  }

  addMakeupOption(makeup : Makeup){
    this._makeUpService.addMakeupOption(makeup)
  }

  onNewMakeupOption(){
    this.presentMakeupForm({id: 1, name: "", price: 0, image: ""})
  }

  deleteMakeupOptionById(id: number) {
    return this._makeUpService.deleteMakeupOptionById(id)
  }

  onEditMakeupOption(makeup : Makeup) {
      this.presentMakeupForm(makeup)
  }

  async presentMakeupForm(makeup : Makeup){
    const modalController = await this.modalController.create({
      component: MakeupFormComponent,
      componentProps:{
        makeup : makeup
      }
    });
    modalController.present();
    modalController.onDidDismiss().then(result => {
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this._makeUpService.addMakeupOption(result.data.persona);
            break;
          case 'Edit':
            this._makeUpService.updateMakeupOption(result.data.persona);
            break;
          default:
        }
      }
    });
  }


  onDeleteMakeupOption(makeup : Makeup) {
    this.onDeleteAlert(makeup)
  }

  async onDeleteAlert(makeup: Makeup) {
    const alert = await this.alertController.create({
      header: '¿Are you sure you want to delete ' + makeup.name + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => {
            this._makeUpService.deleteMakeupOptionById(makeup.id);
          },
        },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
}

}
