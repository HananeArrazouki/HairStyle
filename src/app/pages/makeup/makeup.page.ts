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

  mode: "New" | "Edit" = "New";

  constructor(
    private _makeUpService : MakeupService,
    private alertController : AlertController,
    private modalController : ModalController) { }

  getMakeupOptions() {
    return this._makeUpService.makeupOptionsList$
  }

  getMakeupOptionsById(id: string) {
    return this._makeUpService.getMakeupOptionsById(id)
  }

  onNewMakeupOption(){
    this.presentMakeupForm(null)
  }

  // deleteMakeupOptionById(id: number) {
  //   return this._makeUpService.deleteMakeupOptionById(id)
  // }

  onEditMakeupOption(makeup : Makeup) {
      this.presentMakeupForm(makeup)
  }

  async presentMakeupForm(makeup : Makeup | null){
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
            this._makeUpService.addMakeupOption(result.data.makeup);
            break;
          case 'Edit':
            this._makeUpService.updateMakeupOption(result.data.makeup);
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
            this._makeUpService.deleteMakeupOption(makeup);
          },
        },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
}

}
