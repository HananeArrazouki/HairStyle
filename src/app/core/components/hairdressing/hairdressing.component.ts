import { Component, Input, OnInit } from '@angular/core';
import { Hairdressing } from '../../interfaces/hairdressing';

@Component({
  selector: 'app-hairdressing',
  templateUrl: './hairdressing.component.html',
  styleUrls: ['./hairdressing.component.scss'],
})
export class HairdressingComponent implements OnInit {

  private _hairdressing : Hairdressing = {id: 1, name: "", price: 0, image: ""}
  private _hairdressingService: any

  @Input('hairdressing') set hairdressingOption(hairdressing: Hairdressing) {
      this._hairdressing = hairdressing
  }

  get hairdressingOption() {
    return this._hairdressing
  }

  getHairdressing() {
    return this._hairdressingService.getHairdressing()
  }

  constructor() { }

  ngOnInit() {}

}
