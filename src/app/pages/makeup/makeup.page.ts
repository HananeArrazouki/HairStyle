import { Component } from '@angular/core';
import { MakeupService } from 'src/app/core/services/makeup.service';

@Component({
  selector: 'app-makeup-page',
  templateUrl: './makeup.page.html',
  styleUrls: ['./makeup.page.scss'],
})
export class MakeupPage {

  constructor(
    private _makeUpService : MakeupService
  ) { }

  getMakeupOptions() {
    return this._makeUpService.getMakeupOptions()
  }

  getMakeupOptionsById(id: number) {
    return this._makeUpService.getMakeupOptionsById(id)
  }

}
