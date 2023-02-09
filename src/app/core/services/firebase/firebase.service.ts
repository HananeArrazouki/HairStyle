import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface FirebaseDocument{
  id:string;
  data:DocumentData;
}

export interface FirestoreImages{

}
export const FIRESTORE_HAIRDRESSING_COLLECTION = 'HairStyle-hairdressing';
export const FIRESTORE_MAKEUP_COLLECTION = 'HairStyle-makeup';
export const FIRESTORE_NAILS_COLLECTION = 'HairStyle-nails';
export const FIRESTORE_APPOINTMENT_COLLECTION = 'HairStyle-appointment';
export const FIRESTORE_IMAGES_COLLECTION = 'HairStyle-images';
export const FIRESTORAGE_PREFIX_PATH = 'HairStyle-images';

@Injectable({
  providedIn: 'root'
})
export abstract class FirebaseService {

  protected active=false;
  protected app;
  protected db;
  protected webStorage;
  protected auth:Auth;
  protected analytics = null;
  protected user;
  protected _isLogged = new BehaviorSubject<boolean>(false);
  public isLogged$ = this._isLogged.asObservable();

  public abstract init();
  public abstract imageUpload(blob: Blob): Promise<any>;
  public abstract createDocument(collectionName:string, data:any):Promise<string>;
  public abstract updateDocument(collectionName:string, document:string, data:any):Promise<void>;
  public abstract getDocuments(collectionName:string):Promise<FirebaseDocument[]>;
  public abstract getDocument(collectionName:string, document:string):Promise<FirebaseDocument>;
  public abstract getDocumentBy(collectionName:string, field:string, value:any):Promise<FirebaseDocument[]>;
  public abstract subscribeToCollection(collectionName, subject: BehaviorSubject<any[]>, mapFunction:(el:DocumentData)=>any):Unsubscribe
  public abstract setUserAndEmail(uid:string, email:string);
  public abstract createUserWithEmailAndPassword(email:string, password:string);
  public abstract connectUserWithEmailAndPassword(email:string, password:string);
  public abstract signOut();
  public abstract signOut(signInAnon:boolean);
  public abstract isUserConnected():Promise<boolean>;
  public abstract isUserConnectedAnonymously():Promise<boolean>;
  public abstract connectAnonymously():Promise<void>;
  public abstract deleteUser():Promise<void>;
}
