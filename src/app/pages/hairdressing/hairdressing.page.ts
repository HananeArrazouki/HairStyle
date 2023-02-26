import { Component} from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { HairdressingFormComponent } from 'src/app/core/components/hairdressing-form/hairdressing-form.component';
import { Hairdressing } from 'src/app/core/interfaces/hairdressing';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { HairdressingService } from 'src/app/core/services/hairdressing.service';

@Component({
  selector: 'app-hairdressing-page',
  templateUrl: './hairdressing.page.html',
  styleUrls: ['./hairdressing.page.scss'],
})
export class HairdressingPage{

  mode: "New" | "Edit" = "New";

  constructor(
    private modalController : ModalController,
    private _hairdressingService : HairdressingService,
    private alertController : AlertController,
    private appointmentsService: AppointmentService) { }

  gethairDressingOptions() {
    return this._hairdressingService.hairdressingOptionsList$
  }

  gethairDressingOptionsById(id: string) {
    return this._hairdressingService.getHairDressingOptionsById(id)
  }


  onNewhairdressingOption(){
    this.presentHairdressingForm(null)
  }

  // deleteHairdressingOptionById(id: number) {
  //   return this._hairdressingService.deleteHairdressingOptionById(id)
  // }

  onEditHairdressingOption(hairdressing : Hairdressing) {
      this.presentHairdressingForm(hairdressing)
  }



  async presentHairdressingForm(hairdressing : Hairdressing | null){
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
            this._hairdressingService.addHairdressingOption(result.data.hairdressing);
            break;
          case 'Edit':
            this._hairdressingService.updateHairdressingOption(result.data.hairdressing);
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
            this._hairdressingService.deleteHairdressingOption(hairdressing);
          },
        },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
}

}
