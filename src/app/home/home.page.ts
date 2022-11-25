import { Component } from '@angular/core';
import { SalonOptionsService } from '../core/services/salon-options.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    // servicesList: String[] = [
    //             "Hairdressing",
    //             "Nail salon",
    //             "Make-up",
    //             "Spa"
    // ]

    slideOptns= {
      initialSlide: 1,
      speed: 100,
      loop: true,
      autoplay: {
        delay: 4000
      }
    }
    getSalonOptions() {
      return this._salonOptionsService.getSalonOptions()
    }

  constructor(private _salonOptionsService : SalonOptionsService) {}

}
