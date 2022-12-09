import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hairdressing } from '../interfaces/hairdressing';

@Injectable({
  providedIn: 'root'
})
export class HairdressingService {

  private _hairDressingOptions: Hairdressing[] = [
    {
      id: 1,
      name: "wash and cut",
      price: 15.5,
      image: "/assets/icon_menu/washAndCut.png"
    },
    {
      id: 2,
      name: "highlights",
      price: 60,
      image: "/assets/icon_menu/highlights.png"
    },
    {
      id: 3,
      name: "professional color",
      price: 34.99,
      image: "/assets/icon_menu/professionalColour.png"
    },
    {
      id: 4,
      name: "brushing",
      price: 16.99,
      image: "/assets/icon_menu/brushing.png"
    },
  ]

  id : number = this._hairDressingOptions.length + 1
  private _hairdressingSubject: BehaviorSubject<Hairdressing[]> = new BehaviorSubject(this._hairDressingOptions)
  public hairdressingOptionsList$ = this._hairdressingSubject.asObservable();

  public getHairDressingOptions(): Hairdressing[] {
    return this._hairDressingOptions;
  }

  public getHairDressingOptionsById(id: number):(Hairdressing | undefined) {
    return this._hairDressingOptions.find(op => op.id == id);
  }

  addHairdressingOption(hairdressing: Hairdressing) {
    hairdressing.id = this.id++;
    this._hairDressingOptions.push(hairdressing)
    this._hairdressingSubject.next(this._hairDressingOptions)
  }

  updateHairdressingOption(hairdressing: Hairdressing){
    var updatedHairdressingOption = this._hairDressingOptions.find(p => p.id == hairdressing.id)
    if(updatedHairdressingOption){
      updatedHairdressingOption.name = hairdressing.name
      updatedHairdressingOption.price = hairdressing.price
      updatedHairdressingOption.image = hairdressing.image
    }   
    this._hairdressingSubject.next(this._hairDressingOptions)
  }

  //Delete an option of the hairdressing.
  deleteHairdressingOptionById(id: number) {
    this._hairDressingOptions = this._hairDressingOptions.filter(p => p.id != id);
    this._hairdressingSubject.next(this._hairDressingOptions)
  }

  constructor() { }
}
