import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Aboutme } from '../interfaces/aboutme';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  private _aboutMe : Aboutme[] = [
    {
      id: 1,
      name: "Personal Informationes",
      image: "/assets/icon-menu/Hanane.png"
    },
    {
      id: 2,
      name: "Labor Informations",
      image: "/assets/icon-menu/Hanane.png"
    },
    {
      id: 3,
      name: "Titles",
      image: "/assets/icon-menu/Hanane.png"
    },
  ]

  id : number = this._aboutMe.length + 1
  private _aboutMeSubject: BehaviorSubject<Aboutme[]> = new BehaviorSubject(this._aboutMe)
  public aboutMeList$ = this._aboutMeSubject.asObservable();

  public getAboutme(): Aboutme[] {
    return this._aboutMe;
  }

  constructor() { }
}
