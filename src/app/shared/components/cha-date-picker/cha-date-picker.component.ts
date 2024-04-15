import { NgClass, NgIf, NgFor } from '@angular/common';
import { Component, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DatePickerComponent, DpDatePickerModule, ECalendarValue, IDatePickerConfig} from 'ng2-date-picker';




@Component({
  selector: 'cha-date-picker',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, FormsModule,NgIf, DpDatePickerModule],
  templateUrl: './cha-date-picker.component.html',
  styleUrl: './cha-date-picker.component.css',
})
export class ChaDatePickerComponent {
 @ViewChild('dayPicker') datePicker!: DatePickerComponent;
 @Output() dataEvent = new EventEmitter<string>();  
 open() { this.datePicker.api.open(); }  
 close() { this.datePicker.api.close(); }

 selectedDate:any = '';



  

  constructor(){
    //this.initDate();

  }

  sendDataToParent(data: any) {
    //console.log('date event',data)
    //console.log('date event2',this.selectedDate)
    this.dataEvent.emit(data);
  }

  
  


}
