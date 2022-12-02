import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  id : number = this._nailsOptions.length + 1
  private _nailsSubject: BehaviorSubject<Nails[]> = new BehaviorSubject(this._nailsOptions)
  public nailsOptionsList$ = this._nailsSubject.asObservable();


  public getNailsOptions(): Nails[] {
    return this._nailsOptions;
  }

  public getNailsOptionsById(id: number):(Nails | undefined) {
    return this._nailsOptions.find(op => op.id == id)
  }

  addNailsOption(nails: Nails) {
    nails.id = this.id++;
    this._nailsOptions.push(nails)
    this._nailsSubject.next(this._nailsOptions)
  }

  updateNailsOption(nails: Nails){
    var updatedNailsOption = this._nailsOptions.find(p => p.id == nails.id)
    if(updatedNailsOption){
      updatedNailsOption.name = nails.name
      updatedNailsOption.price = nails.price
      updatedNailsOption.image = nails.image
    }   
    this._nailsSubject.next(this._nailsOptions)
  }

  //Delete an option of the Nails.
  deleteNailsOptionById(id: number) {
    this._nailsOptions = this._nailsOptions.filter(p => p.id != id);
    this._nailsSubject.next(this._nailsOptions)
  }


  constructor() { }
}
