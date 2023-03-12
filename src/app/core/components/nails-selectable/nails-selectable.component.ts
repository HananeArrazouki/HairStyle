import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
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

  nailsSelected : Nails = null
  propagateChange = (_:any) => { }
  isDisabled:boolean = false;

  constructor( private nailsService: NailsService) { }

  getNailsList() {
    return this.nailsService.nailsOptionsList$
  } 

  async writeValue(obj: any) {
    try {
      this.nailsSelected = await this.nailsService.getNailsOptionsById(obj);
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
    return this.nailsService.getNailsOptions();
  }

  onItemClicked(nails: Nails, accordion: IonAccordionGroup) {
    this.nailsSelected = nails;
    accordion.value = '';
    this.propagateChange(this.nailsSelected.docId);
  }


}
