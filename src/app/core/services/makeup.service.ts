import { Injectable } from '@angular/core';
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

  public getMakeupOptions(): Makeup[] {
    return this._makeupOptions;
  }

  public getMakeupOptionsById(id: number) {
    return this._makeupOptions.find(op => op.id == id)
  }

  constructor() { }
}
