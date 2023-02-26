import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { NailsFormComponent } from 'src/app/core/components/nails-form/nails-form.component';
import { Nails } from 'src/app/core/interfaces/nails';
import { NailsService } from 'src/app/core/services/nails.service';

@Component({
  selector: 'app-nails-page',
  templateUrl: './nails.page.html',
  styleUrls: ['./nails.page.scss'],
})
export class NailsPage {

  mode: "New" | "Edit" = "New";

  constructor(
    private _nailsService : NailsService,
    private modalController : ModalController,
    private alertController : AlertController) { }

  getNailsOptions() {
    return this._nailsService.nailsOptionsList$
  }

  getNailsOptionsById(id: string) {
    return this._nailsService.getNailsOptionsById(id)
  }

  
  // addNailsOption(nails : Nails){
  //   this._nailsService.addNailsOption(nails)
  // }

  onNewNailsOption(){
    this.presentNailsForm(null)
  }

  // deleteNailsOptionById(id: number) {
  //   return this._nailsService.deleteNailsOptionById(id)
  // }

  onEditNailsOption(nails : Nails) {
      this.presentNailsForm(nails)
  }

  async presentNailsForm(nails : Nails | null){
    const modalController = await this.modalController.create({
      component: NailsFormComponent,
      componentProps:{
        nails : nails
      }
    });
    modalController.present();
    modalController.onDidDismiss().then(result => {
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this._nailsService.addNailsOption(result.data.nails);
            break;
          case 'Edit':
            this._nailsService.updateNailsOption(result.data.nails);
            break;
          default:
        }
      }
    });
  }


  onDeleteNailsOption(nails : Nails) {
    this.onDeleteAlert(nails)
  }

  async onDeleteAlert(nails: Nails) {
    const alert = await this.alertController.create({
      header: '¿Are you sure you want to delete ' + nails.name + '?',
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
            this._nailsService.deleteNailsOption(nails);
          },
        },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

}
