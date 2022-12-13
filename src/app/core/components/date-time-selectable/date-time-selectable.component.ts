import { Component, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup, IonDatetime } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment'

const DATETIME_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimeSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-date-time-selectable',
  templateUrl: './date-time-selectable.component.html',
  styleUrls: ['./date-time-selectable.component.scss'],
  providers:[DATETIME_PROFILE_VALUE_ACCESSOR]
})
export class DateTimeSelectableComponent implements OnDestroy, ControlValueAccessor {

  isDisabled: boolean | undefined;
  selectedDateTime: any;
  propagateChange = (_:any) => { }
  hairDressingSrv: any;
  hasValue: Boolean = false

  private dateSubject = new BehaviorSubject(this.formatDate(moment()))
  public date$ = this.dateSubject.asObservable();
    
  constructor() { }

  ngOnDestroy(): void {
    this.dateSubject.complete();
  }

  writeValue(obj: any): void{
    if(obj){
      this.hasValue = true;
      this.dateSubject.next(this.formatDate(moment(obj)))
    } 
  }

  formatDate(date:moment.Moment){
    return date.format('YYYY-MM-DDTHH:mmZ')
  }

  serDisabledState?(isDisabled: boolean): void{
    this.isDisabled = isDisabled;
  }

  onDateTimeChanged(event: { detail: { value: any; }; }, accordion:IonAccordionGroup){
    setTimeout(() => {
      var value = this.formatDate(moment(event.detail.value));
      if(value != this.dateSubject.getValue()){
        this.hasValue = true;
        this.dateSubject.next(value);
        accordion.value = '';
        this.propagateChange(value)
      }
    }, 100)   
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  getHairdressing(){
    return this.hairDressingSrv.getHairdressing()
  }

  registerOnTouched(fn: any): void{}

  onCancel(datetime:IonDatetime, accordion:IonAccordionGroup){
      datetime.cancel();
      accordion.value=''
  }
  
  onConfirm(datetime: IonDatetime, accordion:IonAccordionGroup){
    datetime.confirm();
  }

}

