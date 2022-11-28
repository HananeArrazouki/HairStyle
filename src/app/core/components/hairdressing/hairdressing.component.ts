import { Component, Input } from '@angular/core';
import { Hairdressing } from '../../interfaces/hairdressing';
import { HairdressingService } from '../../services/hairdressing.service';

@Component({
  selector: 'app-hairdressing',
  templateUrl: './hairdressing.component.html',
  styleUrls: ['./hairdressing.component.scss'],
})
export class HairdressingComponent {

  private _hairdressing : Hairdressing = {id: 1, name: "", price: 0, image: ""}
  

  @Input('hairdressing') set hairdressingOption(hairdressing: Hairdressing) {
      this._hairdressing = hairdressing
  }
  
  constructor(private _hairdressingService: HairdressingService) { }

  get hairdressingOption() {
    return this._hairdressing
  }

  getHairdressing() {
    return this._hairdressingService.getHairDressingOptions()
  }

  


}
