import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Makeup } from '../../interfaces/makeup';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.scss'],
})
export class MakeupComponent {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() makeup : Makeup = {id: 0, docId: "", name: "", price: 0, image: ""}
  @Input() mode: String | undefined;
  
  onEditClick(){
    this.onEdit.emit(this.makeup);
  }

  onDeleteClick(){
    this.onDelete.emit(this.makeup);
  }
}
