import { Component } from '@angular/core';
import { NailsService } from 'src/app/core/services/nails.service';

@Component({
  selector: 'app-nails-page',
  templateUrl: './nails.page.html',
  styleUrls: ['./nails.page.scss'],
})
export class NailsPage {

  constructor(
    private _nailsService : NailsService
  ) { }

  getNailsOptions() {
    return this._nailsService.getNailsOptions()
  }

  getNailsOptionsById(id: number) {
    return this._nailsService.getNailsOptionsById(id)
  }

}
