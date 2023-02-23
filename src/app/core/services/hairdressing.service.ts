import { Injectable } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { Hairdressing } from '../interfaces/hairdressing';
import { ApiService } from './api.service';
import { FileUploaded, FirebaseService } from './firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class HairdressingService {

  // private _hairDressingOptions: Hairdressing[] = [
  //   {
  //     id: 1,
  //     name: "wash and cut",
  //     price: 15.5,
  //     image: "/assets/icon_menu/washAndCut.png"
  //   },
  //   {
  //     id: 2,
  //     name: "highlights",
  //     price: 60,
  //     image: "/assets/icon_menu/highlights.png"
  //   },
  //   {
  //     id: 3,
  //     name: "professional color",
  //     price: 34.99,
  //     image: "/assets/icon_menu/professionalColour.png"
  //   },
  //   {
  //     id: 4,
  //     name: "brushing",
  //     price: 16.99,
  //     image: "/assets/icon_menu/brushing.png"
  //   },
  // ]

  // id : number = this._hairDressingOptions.length + 1
  private _hairdressingSubject: BehaviorSubject<Hairdressing[]> = new BehaviorSubject([])
  public hairdressingOptionsList$ = this._hairdressingSubject.asObservable();

  unsubscr;
  constructor(
    private firebase:FirebaseService
  ) {
    this.unsubscr = this.firebase.subscribeToCollection('hairdressing',this._hairdressingSubject, this.mapHairdressing);
  }

  ngOnDestroy(): void {
    this.unsubscr();
  }

  private mapHairdressing(doc:DocumentData){
    return {
      id:0,
      docId: doc['id'],
      name:doc['data']().name,
      price:doc['data']().price,
      image:doc['data']().image,
    };
  }
  
  getHairDressingOptions() {
    return this._hairdressingSubject.value;
  }

  public getHairDressingOptionsById(id: string):Promise<Hairdressing> {
    return new Promise<Hairdressing>(async (resolve, reject)=>{
      try {
        var hairdressing = (await this.firebase.getDocument('hairdressing', id));
        resolve({
          id:0,
          docId: hairdressing['id'],
          name: hairdressing.data['name'],
          price:hairdressing.data['price'],
          image:hairdressing.data['image'], 
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

  async addHairdressingOption(hairdressing: Hairdressing) {
    var _hairDressing = {
      id:0,
      docId: hairdressing.docId,
      name:hairdressing.name,
      price:hairdressing.price,
    };
    if(hairdressing['pictureFile']){
      var response = await this.uploadImage(hairdressing['pictureFile']);
      _hairDressing['picture'] = response.image;
    }
    try {
      await this.firebase.createDocument('hairdressing', _hairDressing);  
    } catch (error) {
      console.log(error);
    }
  }

  async updateHairdressingOption(hairdressing: Hairdressing){
    var _hairDressing = {
      id:0,
      docId: hairdressing.docId,
      name:hairdressing.name,
      price:hairdressing.price
    };
    if(hairdressing['pictureFile']){
      var response:FileUploaded = await this.uploadImage(hairdressing['pictureFile']);
      _hairDressing['picture'] = response.file;
    }
    try {
      await this.firebase.updateDocument('hairdressing', hairdressing.docId, _hairDressing);  
    } catch (error) {
      console.log(error);
    }
  }

  //Delete an option of the hairdressing.
  async deleteHairdressingOption(hairdressing: Hairdressing) {
    await this.firebase.deleteDocument('hairdressing', hairdressing.docId);
  }

}
