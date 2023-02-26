import { Injectable } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { Nails } from '../interfaces/nails';
import { FirebaseService, FileUploaded } from './firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class NailsService {

  private _nailsSubject: BehaviorSubject<Nails[]> = new BehaviorSubject([])
  public nailsOptionsList$ = this._nailsSubject.asObservable();

  unsubscr;
  constructor(
    private firebase:FirebaseService
  ) {
    try{
      this.unsubscr = this.firebase.subscribeToCollection('nails',this._nailsSubject, this.mapNails);
    }catch(error) {
      console.log(error);
    } 
  }

  ngOnDestroy(): void {
    this.unsubscr();
  }

  private mapNails(doc:DocumentData){
    return {
      id:0,
      docId: doc['data']().docId,
      name:doc['data']().name,
      price:doc['data']().price,
      image:doc['data']().image,
    };
  }
  
  getNailsOptions() {
    return this._nailsSubject.value;
  }

  public getNailsOptionsById(id: string):Promise<Nails> {
    return new Promise<Nails>(async (resolve, reject)=>{
      try {
        var nails = (await this.firebase.getDocument('nails', id));
        resolve({
          id:0,
          docId: nails.data['docId'],
          name: nails.data['name'],
          price:nails.data['price'],
          image:nails.data['image'], 
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

  // async addNailsOption(nails: Nails) {
  //   var _nails = {
  //     id:0,
  //     docId: nails.docId,
  //     name:nails.name,
  //     price:nails.price,
  //   };
  //   if(nails['pictureFile']){
  //     var response = await this.uploadImage(nails['pictureFile']);
  //     _nails['picture'] = response.image;
  //   }
  //   try {
  //     await this.firebase.createDocument('nails', _nails);  
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async addNailsOption(nails: Nails) {
    try {
      await this.firebase.createDocument("nails", nails).then((docId) => {
        nails.docId = docId
        this.updateNailsOption(nails)
      });
    } catch(error) {
      console.log(error);
    }
  }

  async updateNailsOption(nails: Nails) {
    try {
      console.log(nails);
      await this.firebase.updateDocument('nails', nails.docId, nails);
    } catch (error) {
      console.log(error);
    } 
  }

  // async updateNailsOption(nails: Nails){
  //   var _nails = {
  //     id:0,
  //     docId: nails.docId,
  //     name:nails.name,
  //     price:nails.price
  //   };
  //   if(nails['pictureFile']){
  //     var response:FileUploaded = await this.uploadImage(nails['pictureFile']);
  //     _nails['picture'] = response.file;
  //   }
  //   try {
  //     await this.firebase.updateDocument('nails', nails.docId, _nails);  
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  //Delete an option of the nails.
  async deleteNailsOption(nails: Nails) {
    await this.firebase.deleteDocument('nails', nails.docId);
  }
}
