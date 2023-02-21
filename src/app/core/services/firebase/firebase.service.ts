import { Injectable } from '@angular/core';
import { FirebaseApp } from 'firebase/app';
import { Auth, Unsubscribe, User } from 'firebase/auth';
import { DocumentData, Firestore } from 'firebase/firestore';
import { FirebaseStorage } from 'firebase/storage';
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
  protected app: FirebaseApp | any;
  protected db: Firestore | any;
  protected webStorage: FirebaseStorage | any;
  protected auth: Auth | any;
  protected analytics = null;
  protected user: User | any;
  protected _isLogged = new BehaviorSubject<boolean>(false);
  public isLogged$ = this._isLogged.asObservable();

  public abstract init(): any;
  public abstract imageUpload(blob: Blob): Promise<any>;
  public abstract createDocument(collectionName:string, data:any):Promise<string>;
  public abstract updateDocument(collectionName:string, document:string, data:any):Promise<void>;
  public abstract getDocuments(collectionName:string):Promise<FirebaseDocument[]>;
  public abstract getDocument(collectionName:string, document:string):Promise<FirebaseDocument>;
  public abstract getDocumentBy(collectionName:string, field:string, value:any):Promise<FirebaseDocument[]>;
  public abstract subscribeToCollection(collectionName: string, subject: BehaviorSubject<any[]>, mapFunction:(el:DocumentData)=>any):Unsubscribe
  public abstract setUserAndEmail(uid:string, email:string): any;
  public abstract createUserWithEmailAndPassword(email:string, password:string): any;
  public abstract connectUserWithEmailAndPassword(email:string, password:string): any;
  public abstract signOut(): any;
  public abstract signOut(signInAnon:boolean): any;
  public abstract isUserConnected():Promise<boolean>;
  public abstract isUserConnectedAnonymously():Promise<boolean>;
  public abstract connectAnonymously():Promise<void>;
  public abstract deleteUser():Promise<void>;
}
