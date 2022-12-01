import { Injectable } from '@angular/core';
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
      image: "./../../assets/icon_menu/washAndCut.png"
    },
    {
      id: 2,
      name: "highlights",
      price: 60,
      image: "./../../assets/icon_menu/highlights.png"
    },
    {
      id: 3,
      name: "professional colour",
      price: 34.99,
      image: "./../../assets/icon_menu/professionalColour.png"
    },
    {
      id: 4,
      name: "brushing",
      price: 16.99,
      image: "./../../assets/icon_menu/brushing.png"
    },
  ]

  public getHairDressingOptions(): Hairdressing[] {
    return this._hairDressingOptions;
  }

  public getHairDressingOptionsById(id: number):(Hairdressing | undefined) {
    return this._hairDressingOptions.find(op => op.id == id);
  }

  constructor() { }
}
