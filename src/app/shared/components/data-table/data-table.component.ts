import { NgClass, NgIf, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {AdminService} from '../../../admin/services/admin.service';
  
@Component({
  selector: 'data-table',
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent {
  @Input() columnData: any = [];
  @Input() rowData: any = [];
  @Input() pageData: number[] = [];
  @Input() state:boolean = false;
  @Output() showModal = new EventEmitter<boolean>();
 

  shorting: boolean = false;
  

  constructor(){

  }

  
  sortingUp() {
    this.shorting = !this.shorting;
  }
  sortingDown() {
    this.shorting = !this.shorting;
  }

   onModalShow() {
   
    this.showModal.emit(true);
  }



}
