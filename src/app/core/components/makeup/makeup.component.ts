import { Component, Input } from '@angular/core';
import { Makeup } from '../../interfaces/makeup';
import { MakeupService } from '../../services/makeup.service';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.scss'],
})
export class MakeupComponent {

  private _makeup : Makeup = {id: 1, name: "", price: 0, image: ""}
  

  @Input('makeup') set makeupOption(makeup: Makeup) {
      this._makeup = makeup
  }
  
  constructor(private _makeupService: MakeupService) { }

  get makeupOption() {
    return this._makeup
  }

  getHairdressing() {
    return this._makeupService.getMakeupOptions()
  }


}
