import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Hairdressing } from '../../interfaces/hairdressing';
import { HairdressingService } from '../../services/hairdressing.service';

const PERSON_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => HairdressingSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-hairdressing-selectable',
  templateUrl: './hairdressing-selectable.component.html',
  styleUrls: ['./hairdressing-selectable.component.scss'],
  providers: [PERSON_PROFILE_VALUE_ACCESSOR]
})
export class HairdressingSelectableComponent implements ControlValueAccessor {

  hairdressingSelected : Hairdressing | undefined
  propagateChange = (_:any) => { }

  constructor( private hairDressingService: HairdressingService) { }

  getHairdressingList() {
    return this.hairDressingService.hairdressingOptionsList$
  } 

  writeValue(hairdressingId: any): void {
    this.hairdressingSelected = this.hairDressingService.getHairDressingOptionsById(hairdressingId);
  }

  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}
