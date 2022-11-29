import { Injectable } from '@angular/core';
import { Nails } from '../interfaces/nails';

@Injectable({
  providedIn: 'root'
})
export class NailsService {

  private _nailsOptions: Nails[] = [
    {
      id: 1,
      name: "Normal Polish",
      price: 19,
      image: "./../../assets/icon_menu/PolishNails.png"
    },
    {
      id: 2,
      name: "semi-permanent polish",
      price: 25,
      image: "./../../assets/icon_menu/PermanentNails.png"
    },
    {
      id: 3,
      name: "Gel",
      price: 30,
      image: "./../../assets/icon_menu/GelNails.png"
    },
  ]

  public getNailsOptions(): Nails[] {
    return this._nailsOptions;
  }

  public getNailsOptionsById(id: number) {
    return this._nailsOptions.find(op => op.id == id)
  }

  constructor() { }
}
