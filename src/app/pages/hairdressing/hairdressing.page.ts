import { Component} from '@angular/core';
import { HairdressingService } from 'src/app/core/services/hairdressing.service';

@Component({
  selector: 'app-hairdressing',
  templateUrl: './hairdressing.page.html',
  styleUrls: ['./hairdressing.page.scss'],
})
export class HairdressingPage{

  constructor(
    private _hairDressingService : HairdressingService
  ) { }

  gethairDressingOptions() {
    return this._hairDressingService.getHairDressingOptions()
  }

  gethairDressingOptionsById(id: number) {
    return this._hairDressingService.getHairDressingOptionsById(id)
  }


}
