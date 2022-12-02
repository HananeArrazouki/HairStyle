import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Makeup } from '../interfaces/makeup';

@Injectable({
  providedIn: 'root'
})
export class MakeupService {
  private _makeupOptions: Makeup[] = [
    {
      id: 1,
      name: "Wedding",
      price: 199,
      image: "./../../assets/icon_menu/WeddingMakeUp.png"
    },
    {
      id: 2,
      name: "Fiancaille ",
      price: 50,
      image: "./../../assets/icon_menu/FiancailleMakeUp.png"
    },
    {
      id: 3,
      name: "Invited",
      price: 29,
      image: "./../../assets/icon_menu/InvitedMakeUp.png"
    },
    {
      id: 4,
      name: "Shooting",
      price: 25,
      image: "./../../assets/icon_menu/ShootingMakeUp.png"
    },
    {
      id: 5,
      name: "Halloween",
      price: 25.5,
      image: "./../../assets/icon_menu/HalloweenMakeUp.png"
    },
  ]

  id : number = this._makeupOptions.length + 1
  private _makeupSubject: BehaviorSubject<Makeup[]> = new BehaviorSubject(this._makeupOptions)
  public makeupOptionsList$ = this._makeupSubject.asObservable();


  public getMakeupOptions(): Makeup[] {
    return this._makeupOptions;
  }

  public getMakeupOptionsById(id: number):(Makeup | undefined) {
    return this._makeupOptions.find(op => op.id == id)
  }

  addMakeupOption(makeup: Makeup) {
    makeup.id = this.id++;
    this._makeupOptions.push(makeup)
    this._makeupSubject.next(this._makeupOptions)
  }

  updateMakeupOption(makeup: Makeup){
    var updatedMakeupOption = this._makeupOptions.find(p => p.id == makeup.id)
    if(updatedMakeupOption){
      updatedMakeupOption.name = makeup.name
      updatedMakeupOption.price = makeup.price
      updatedMakeupOption.image = makeup.image
    }   
    this._makeupSubject.next(this._makeupOptions)
  }

  //Delete an option of the MakeUp.
  deleteMakeupOptionById(id: number) {
    this._makeupOptions = this._makeupOptions.filter(p => p.id != id);
    this._makeupSubject.next(this._makeupOptions)
  }

  constructor() { }
}
