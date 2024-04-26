import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from 'src/app/shared/components/data-table/data-table.component';
import { ChaDatePickerComponent } from 'src/app/shared/components/cha-date-picker/cha-date-picker.component';
import { IColumn, IProduct, TableData } from './table.data';
import {AdminService} from '../../../services/admin.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { AlertType } from 'src/app/shared/components/alert/alert.type';

import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { pageTransition } from 'src/app/shared/utils/animations';

 
@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
  NgClass, 
  DataTableComponent,
  ChaDatePickerComponent,
  NgFor, 
  FormsModule,
  NgIf,
  CommonModule,
  AlertComponent,
  ModalModule],
  templateUrl: './insured-clients.component.html',
  styleUrl: './insured-clients.component.css',
  animations: [pageTransition]
})
export class AdminDataTableComponent {
  public products: IProduct[] = TableData.products;
  public pages: number[] = TableData.pageNumber;
  public columnData:IColumn[] = TableData.columnData;
  public insuranceList:any[] = [];
  public patients:any[] = [];
  selectedInsurance:any = null;
  alert_message:string = '';
  show:boolean = false;
  dateFrom:any = null;
  dateTo:any = null;
  state:boolean = false;
  readonly alertType = AlertType;

  showModal: boolean = false;

  modalCompnent: ModalComponent


  

  constructor(private adminService:AdminService){
    this.modalCompnent = new ModalComponent();
    this.init();


  }

  async init(){

    this.adminService.getInsuranceList().then((result)=>{
      this.insuranceList = result;



    });



  }

  onInsuranceSelected(){
    console.log('here1',this.selectedInsurance);
    

    if(this.show == true && this.selectedInsurance != null){
      if(this.dateTo == null){
        this.alert_message = 'Make sure the End Date is selected';
      }
      else{
        this.show =false;
        this.loadTable(this.selectedInsurance);
      }
    }


  }

  getPatientsByInsurance(insurance_id:any){
    
    this.adminService.getPatientsByInsurance(insurance_id).then((result)=>{
      this.insuranceList = result;



    });
  }

  receiveDateFrom(data: string) {

    console.log('recieved data from::',data);
    this.dateFrom = data;
    if(this.show == true && this.selectedInsurance != null && this.dateTo != null){
      this.show = false;
      this.loadTable(this.selectedInsurance);

    }

  }

  receiveDateTo(data: string) {

    console.log('recieved data to::',data);
    this.dateTo = data;
    this.show =false;
    if(this.selectedInsurance == null && this.dateTo != null){
      this.alert_message = 'Make sure you have selected insurance on the insurance list';
      this.show =true;

    }
    else if(this.dateTo != null && this.dateFrom == null){
      this.alert_message = 'Make sure you have selected Start Date';
      this.show =true;

    }
    else if(this.dateTo != null && this.dateFrom != null && this.selectedInsurance != null){
      this.loadTable(this.selectedInsurance);
    }

  }

  loadTable(insurance_id:any){

    console.log('load table')
    this.state = true;
    this.adminService.getPatientsByInsurance(insurance_id).then((results)=>{
      this.patients = results;
    });

  }


  openModal() {
    this.showModal = !this.showModal;
  }

  onModalCloseHandler(event: boolean) {
    this.showModal = event;
  }

  onModalShowHandler(event:boolean){
    this.showModal = event;
  }


  


}
