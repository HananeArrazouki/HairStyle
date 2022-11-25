import { Injectable } from '@angular/core';
import { SalonOptions } from '../interfaces/salon-options';

@Injectable({
  providedIn: 'root'
})
export class SalonOptionsService {

  private _salonOptions: SalonOptions[] = [
    {
      id: 1,
      image: './../../assets/icon_menu/pelu.png',
      name: 'HairDressing'
    },
    {
      id: 2,
      image: './../../assets/icon_menu/nails.png',
      name: 'Nails'
    },
    {
      id: 3,
      image: './../../assets/icon_menu/makeup.png',
      name: 'MakeUp'
    }
  ]

  getSalonOptions(): SalonOptions[] {
    return this._salonOptions
  }


  constructor() { }
}
