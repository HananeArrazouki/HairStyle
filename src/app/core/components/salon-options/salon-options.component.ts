import { Component, Input } from '@angular/core';
import { SalonOptions } from '../../interfaces/salon-options';

@Component({
  selector: 'app-salon-options',
  templateUrl: './salon-options.component.html',
  styleUrls: ['./salon-options.component.scss'],
})
export class SalonOptionsComponent{

  private _salonOption : SalonOptions={id: 1, name:"", image:""};
  private _salonOptionsService : any

  @Input('options') set option(salonOpcion: SalonOptions){
    this._salonOption = salonOpcion
  }

  get option() {
    return this._salonOption;
  }

  slideOptns= {
    initialSlide: 1,
    speed: 50,
    loop: true,
    autoplay: {
      delay: 3000
    }
  }
  getSalonOptions() {
    return this._salonOptionsService.getSalonOptions()
  }

  constructor(
    
  ) { }


}
