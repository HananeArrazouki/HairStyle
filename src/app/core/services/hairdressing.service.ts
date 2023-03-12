import { Injectable } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { Hairdressing } from '../interfaces/hairdressing';
import { FileUploaded, FirebaseService } from './firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class HairdressingService {

  private _hairdressingSubject: BehaviorSubject<Hairdressing[]> = new BehaviorSubject([])
  public hairdressingOptionsList$ = this._hairdressingSubject.asObservable();

  unsubscr;
  constructor(
    private firebase:FirebaseService
  ) {
    try{

      this.unsubscr = this.firebase.subscribeToCollection('hairdressing',this._hairdressingSubject, this.mapHairdressing);
    }
    catch(error){
      console.log(error);
    }    
  }

  ngOnDestroy(): void {
    this.unsubscr();
  }

  private mapHairdressing(doc:DocumentData){
    //console.log(doc)
    return {
      id:0,
      docId:doc['id'],
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
          docId: hairdressing.data['docId'],
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

  async addHairdressingOption(haidressing: Hairdressing) {
    try {
      await this.firebase.createDocument("hairdressing", haidressing).then((docId) => {
        haidressing.docId = docId
        this.updateHairdressingOption(haidressing)
      });
    } catch(error) {
      console.log(error);
    }
  }

  async updateHairdressingOption(haidressing: Hairdressing){
    var _haidressing = {
      id:0,
      docId: haidressing.docId,
      name:haidressing.name,
      price:haidressing.price
    };
    if(haidressing['pictureFile']){
      var response:FileUploaded = await this.uploadImage(haidressing['pictureFile']);
      _haidressing['picture'] = response.file;
    }
    try {
      await this.firebase.updateDocument('hairdressing', haidressing.docId, _haidressing);  
    } catch (error) {
      console.log(error);
    }
  }

  // async updateHairdressingOption(hairdressing: Hairdressing) {
  //   try {
  //     console.log(hairdressing);
  //     await this.firebase.updateDocument('hairdressing', hairdressing.docId, hairdressing);
  //   } catch (error) {
  //     console.log(error);
  //   } 
  // }


  //Delete an option of the hairdressing.
  async deleteHairdressingOption(hairdressing: Hairdressing) {
    await this.firebase.deleteDocument('hairdressing', hairdressing.docId);
  }

}
