import { Injectable } from '@angular/core';
import { Makeup } from '../interfaces/makeup';

@Injectable({
  providedIn: 'root'
})
export class MakeupService {
  private _nailsOptions: Makeup[] = [
    {
      id: 1,
      name: "Wedding",
      price: 199,
      image: "./../../assets/icon_menu/.png"
    },
    {
      id: 2,
      name: "Fiancaille ",
      price: 50,
      image: "./../../assets/icon_menu/.png"
    },
    {
      id: 3,
      name: "invited",
      price: 29,
      image: "./../../assets/icon_menu/.png"
    },
    {
      id: 4,
      name: "Shooting",
      price: 25,
      image: "./../../assets/icon_menu/.png"
    },
    {
      id: 5,
      name: "Halloween",
      price: 25.5,
      image: "./../../assets/icon_menu/.png"
    },
  ]
  constructor() { }
}
