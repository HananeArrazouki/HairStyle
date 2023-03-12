import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Makeup } from '../../interfaces/makeup';
import { MakeupService } from '../../services/makeup.service';

const MAKEUP_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MakeupSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-makeup-selectable',
  templateUrl: './makeup-selectable.component.html',
  styleUrls: ['./makeup-selectable.component.scss'],
  providers: [MAKEUP_PROFILE_VALUE_ACCESSOR]
})
export class MakeupSelectableComponent implements ControlValueAccessor {

  makeupSelected : Makeup = null
  propagateChange = (_:any) => { }

  constructor( private makeupService: MakeupService) { }

  getMakeupList() {
    return this.makeupService.makeupOptionsList$
  } 

  async writeValue(obj: any) {
    this.makeupSelected = await this.makeupService.getMakeupOptionsById(obj);
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
