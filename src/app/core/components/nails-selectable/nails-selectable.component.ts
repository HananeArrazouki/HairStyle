import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Nails } from '../../interfaces/nails';
import { NailsService } from '../../services/nails.service';

@Component({
  selector: 'app-nails-selectable',
  templateUrl: './nails-selectable.component.html',
  styleUrls: ['./nails-selectable.component.scss'],
})
export class NailsSelectableComponent implements ControlValueAccessor{

  nailsSelected : Nails | undefined
  propagateChange = (_:any) => { }

  constructor( private mailsService: NailsService) { }

  getNailsList() {
    return this.mailsService.nailsOptionsList$
  } 

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }


}
