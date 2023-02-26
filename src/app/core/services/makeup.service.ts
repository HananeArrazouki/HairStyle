import { Injectable } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { Makeup } from '../interfaces/makeup';
import { FirebaseService, FileUploaded } from './firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class MakeupService {
  // private _makeupOptions: Makeup[] = [
  //   {
  //     id: 1,
  //     name: "Wedding",
  //     price: 199,
  //     image: "./../../assets/icon_menu/WeddingMakeUp.png"
  //   },
  //   {
  //     id: 2,
  //     name: "Fiancaille ",
  //     price: 50,
  //     image: "./../../assets/icon_menu/FiancailleMakeUp.png"
  //   },
  //   {
  //     id: 3,
  //     name: "Invited",
  //     price: 29,
  //     image: "./../../assets/icon_menu/InvitedMakeUp.png"
  //   },
  //   {
  //     id: 4,
  //     name: "Shooting",
  //     price: 25,
  //     image: "./../../assets/icon_menu/ShootingMakeUp.png"
  //   },
  //   {
  //     id: 5,
  //     name: "Halloween",
  //     price: 25.5,
  //     image: "./../../assets/icon_menu/HalloweenMakeUp.png"
  //   },
  // ]

  //id : number = this._makeupOptions.length + 1
  private _makeupSubject: BehaviorSubject<Makeup[]> = new BehaviorSubject([])
  public makeupOptionsList$ = this._makeupSubject.asObservable();


  unsubscr;
  constructor(
    private firebase:FirebaseService
  ) {
    try
    {
      this.unsubscr = this.firebase.subscribeToCollection('makeup',this._makeupSubject, this.mapMakeup);
    }catch(error) {
      console.log(error);
    }    
  }

  ngOnDestroy(): void {
    this.unsubscr();
  }

  private mapMakeup(doc:DocumentData){
    return {
      id:0,
      docId: doc['data'].docId,
      name: doc['data']().name,
      price: doc['data']().price,
      image: doc['data']().image,
    };
  }
  
  getMakeupOptions() {
    return this._makeupSubject.value;
  }

  public getMakeupOptionsById(id: string):Promise<Makeup> {
    return new Promise<Makeup>(async (resolve, reject)=>{
      try {
        var makeup = (await this.firebase.getDocument('makeup', id));
        resolve({
          id:0,
          docId: makeup.data['docId'],
          name: makeup.data['name'],
          price:makeup.data['price'],
          image:makeup.data['image'], 
        });  
      }catch (error) {
        reject(error);
      }
    });
  }

  uploadImage(file):Promise<any>{  
    return new Promise(async (resolve, reject)=>{
      try {
        const data = await this.firebase.imageUpload(file);  
        resolve(data);
      } catch (error) {
        resolve(error);
      }
    });
  }

  // async addMakeupOption(makeup: Makeup) {
  //   var _makeup = {
  //     id:0,
  //     docId: makeup.docId,
  //     name:makeup.name,
  //     price:makeup.price,
  //   };
  //   if(makeup['pictureFile']){
  //     var response = await this.uploadImage(makeup['pictureFile']);
  //     _makeup['picture'] = response.image;
  //   }
  //   try {
  //     await this.firebase.createDocument('makeup', _makeup);  
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async addMakeupOption(makeup: Makeup) {
    try {
      await this.firebase.createDocument("makeup", makeup).then((docId) => {
        makeup.docId = docId
        this.updateMakeupOption(makeup)
      });
    } catch(error) {
      console.log(error);
    }
  }

  async updateMakeupOption(makeup: Makeup) {
    try {
      console.log(makeup);
      await this.firebase.updateDocument('makeup', makeup.docId, makeup);
    } catch (error) {
      console.log(error);
    } 
  }

  // async updateMakeupOption(makeup: Makeup){
  //   var _makeup = {
  //     id:0,
  //     docId: makeup.docId,
  //     name:makeup.name,
  //     price:makeup.price
  //   };
  //   if(makeup['pictureFile']){
  //     var response:FileUploaded = await this.uploadImage(makeup['pictureFile']);
  //     _makeup['picture'] = response.file;
  //   }
  //   try {
  //     await this.firebase.updateDocument('makeup', makeup.docId, _makeup);  
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  //Delete an option of the makeup.
  async deleteMakeupOption(makeup: Makeup) {
    await this.firebase.deleteDocument('makeup', makeup.docId);
  }
}
