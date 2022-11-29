import { Component, Input } from '@angular/core';
import { Nails } from '../../interfaces/nails';
import { NailsService } from '../../services/nails.service';

@Component({
  selector: 'app-nails',
  templateUrl: './nails.component.html',
  styleUrls: ['./nails.component.scss'],
})
export class NailsComponent {

  private _nails : Nails = {id: 1, name: "", price: 0, image: ""}
  

  @Input('nails') set nailsOption(nails: Nails) {
      this._nails = nails
  }
  
  constructor(private _nailsService: NailsService) { }

  get nailsOption() {
    return this._nails
  }

  getNails() {
    return this._nailsService.getNailsOptions()
  }

}
