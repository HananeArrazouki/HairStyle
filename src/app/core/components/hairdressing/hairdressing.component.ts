import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Hairdressing } from '../../interfaces/hairdressing';

@Component({
  selector: 'app-hairdressing',
  templateUrl: './hairdressing.component.html',
  styleUrls: ['./hairdressing.component.scss'],
})
export class HairdressingComponent {

  //private _hairdressing : Hairdressing = {id: 1, name: "", price: 0, image: ""}
  

  // @Input('hairdressing') set hairdressingOption(hairdressing: Hairdressing) {
  //     this._hairdressing = hairdressing
  // }
  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() hairdressing : Hairdressing = {id: 1, name: "", price: 0, image: ""}
  @Input() mode: String | undefined;
  
  onEditClick(){
    this.onEdit.emit(this.hairdressing);
  }

  onDeleteClick(){
    this.onDelete.emit(this.hairdressing);
  }
  
  // constructor(
  //   private _hairdressingService: HairdressingService,
  //   ) { }

    //Get the list of the options
  // get hairdressingOption() {
  //   return this._hairdressing
  // }


  


}
