import { Component} from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { HairdressingFormComponent } from 'src/app/core/components/hairdressing-form/hairdressing-form.component';
import { Hairdressing } from 'src/app/core/interfaces/hairdressing';
import { HairdressingService } from 'src/app/core/services/hairdressing.service';

@Component({
  selector: 'app-hairdressing-page',
  templateUrl: './hairdressing.page.html',
  styleUrls: ['./hairdressing.page.scss'],
})
export class HairdressingPage{

  mode: "Normal" | "Edit" = "Normal";

  constructor(
    private modalController : ModalController,
    private _hairdressingService : HairdressingService,
    private alertController : AlertController) { }

  gethairDressingOptions() {
    return this._hairdressingService.getHairDressingOptions()
    //DUDA: al poner el observable da error!!!
  }

  gethairDressingOptionsById(id: number) {
    return this._hairdressingService.getHairDressingOptionsById(id)
  }

  addHairdressingOption(hairdressing : Hairdressing){
    this._hairdressingService.addHairdressingOption(hairdressing)
  }

  onNewhairdressingOption(){
    this.presentHairdressingForm({id: 1, name: "", price: 0, image: ""})
  }

  deleteHairdressingOptionById(id: number) {
    return this._hairdressingService.deleteHairdressingOptionById(id)
  }

  onEditHairdressingOption(hairdressing : Hairdressing) {
      this.presentHairdressingForm(hairdressing)
  }

  async presentHairdressingForm(hairdressing : Hairdressing){
    const modalController = await this.modalController.create({
      component: HairdressingFormComponent,
      componentProps:{
        hairdressing : hairdressing
      }
    });
    modalController.present();
    modalController.onDidDismiss().then(result => {
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this._hairdressingService.addHairdressingOption(result.data.persona);
            break;
          case 'Edit':
            this._hairdressingService.updateHairdressingOption(result.data.persona);
            break;
          default:
        }
      }
    });
  }


  onDeleteHairdressingOption(hairdressing : Hairdressing) {
    this.onDeleteAlert(hairdressing)
  }

  async onDeleteAlert(hairdressing: Hairdressing) {
    const alert = await this.alertController.create({
      header: '¿Are you sure you want to delete ' + hairdressing.name + '?',
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
            this._hairdressingService.deleteHairdressingOptionById(hairdressing.id);
          },
        },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
}

}
