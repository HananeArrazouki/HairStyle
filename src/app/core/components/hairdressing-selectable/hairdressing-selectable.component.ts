import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Hairdressing } from '../../interfaces/hairdressing';
import { HairdressingService } from '../../services/hairdressing.service';

const HAIRDRESSING_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => HairdressingSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-hairdressing-selectable',
  templateUrl: './hairdressing-selectable.component.html',
  styleUrls: ['./hairdressing-selectable.component.scss'],
  providers: [HAIRDRESSING_PROFILE_VALUE_ACCESSOR]
})
export class HairdressingSelectableComponent implements ControlValueAccessor {

  hairdressingSelected : Hairdressing = null
  propagateChange = (_:any) => { }
  isDisabled:boolean = false;

  constructor( private hairDressingService: HairdressingService) { }

  async writeValue(obj: any) {
    try {
      this.hairdressingSelected = await this.hairDressingService.getHairDressingOptionsById(obj);
    } catch (error) {
      console.log("No se ha podido recupera los datos: " + error);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  getHairdressingList() {
    return this.hairDressingService.hairdressingOptionsList$;
  }

  onItemClicked(hairdressing: Hairdressing, accordion: IonAccordionGroup) {
    this.hairdressingSelected = hairdressing;
    accordion.value = '';
    this.propagateChange(this.hairdressingSelected.docId);
  }

}
