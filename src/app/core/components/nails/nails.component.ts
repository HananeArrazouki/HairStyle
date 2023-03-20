import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Nails } from '../../interfaces/nails';

@Component({
  selector: 'app-nails',
  templateUrl: './nails.component.html',
  styleUrls: ['./nails.component.scss'],
})
export class NailsComponent {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() nails : Nails = {id: 1, docId: "", name: "", price: 0, image: ""}
  @Input() mode: String | undefined;
  
  onEditClick(){
    this.onEdit.emit(this.nails);
  }

  onDeleteClick(){
    this.onDelete.emit(this.nails);
  }

}
