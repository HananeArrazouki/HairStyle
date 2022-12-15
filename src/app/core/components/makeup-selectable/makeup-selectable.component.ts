import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Makeup } from '../../interfaces/makeup';
import { MakeupService } from '../../services/makeup.service';

const PERSON_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MakeupSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-makeup-selectable',
  templateUrl: './makeup-selectable.component.html',
  styleUrls: ['./makeup-selectable.component.scss'],
  providers: [PERSON_PROFILE_VALUE_ACCESSOR]
})
export class MakeupSelectableComponent implements ControlValueAccessor {

  makeupSelected : Makeup | undefined
  propagateChange = (_:any) => { }

  constructor( private makeupService: MakeupService) { }

  getHairdressingList() {
    return this.makeupService.makeupOptionsList$
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
