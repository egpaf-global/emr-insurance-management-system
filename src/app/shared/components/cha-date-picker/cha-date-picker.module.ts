import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaDatePickerComponent } from './cha-date-picker.component';
import { FormsModule } from '@angular/forms';
//import Datepicker from 'flowbite-datepicker/Datepicker';
import {DpDatePickerModule} from 'ng2-date-picker';



@NgModule({
  declarations: [
    ChaDatePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DpDatePickerModule
  ]
})
export class ChaDatePikcerModule { }
