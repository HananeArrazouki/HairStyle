import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Hairdressing } from '../../interfaces/hairdressing';

@Component({
  selector: 'app-hairdressing',
  templateUrl: './hairdressing.component.html',
  styleUrls: ['./hairdressing.component.scss'],
})
export class HairdressingComponent {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() hairdressing : Hairdressing = {id: 0, name: "", price: 0, image: ""}
  @Input() mode: String | undefined;
  
  onEditClick(){
    this.onEdit.emit(this.hairdressing);
  }

  onDeleteClick(){
    this.onDelete.emit(this.hairdressing);
  }
  
}
