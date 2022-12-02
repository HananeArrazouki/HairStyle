import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Nails } from '../../interfaces/nails';
import { NailsService } from '../../services/nails.service';

@Component({
  selector: 'app-nails',
  templateUrl: './nails.component.html',
  styleUrls: ['./nails.component.scss'],
})
export class NailsComponent {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() nails : Nails = {id: 1, name: "", price: 0, image: ""}
  @Input() mode: String | undefined;
  
  onEditClick(){
    this.onEdit.emit(this.nails);
  }

  onDeleteClick(){
    this.onDelete.emit(this.nails);
  }


  // private _nails : Nails = {id: 1, name: "", price: 0, image: ""}
  

  // @Input('nails') set nailsOption(nails: Nails) {
  //     this._nails = nails
  // }
  
  // constructor(private _nailsService: NailsService) { }

  // get nailsOption() {
  //   return this._nails
  // }

  // getNails() {
  //   return this._nailsService.getNailsOptions()
  // }

}
