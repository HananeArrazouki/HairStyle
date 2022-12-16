import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Nails } from '../../interfaces/nails';
import { NailsService } from '../../services/nails.service';

const NAILS_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NailsSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-nails-selectable',
  templateUrl: './nails-selectable.component.html',
  styleUrls: ['./nails-selectable.component.scss'],
  providers: [NAILS_PROFILE_VALUE_ACCESSOR]
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
