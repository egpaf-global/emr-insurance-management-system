import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Token} from "../../public/auth/signin/signin.model";
import {Observable} from "rxjs";

import {environment} from "../../../environments/environment";
import {LocalStorageService} from "../../shared/services/localStorage.service";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private endpoints: any = {
    insurance_list: environment.endpoints.insurance_list
  };
 
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService) { }

  getInsuranceList(): Promise<any>{

    return new Promise ((resolve, reject)=>{
      let test_data = [
      {
        name:'Prime Insurance',
        id: 1
      },
      {
        name:'MASM Insurance',
        id: 2
      }
      ,
      {
        name:'MedAid Insurance',
        id: 3
      }
      ];

      resolve(test_data);

      /*this.httpClient.post(this.endpoints.insurance_list, data).subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );*/
     
      

    });
     
  }



  getPatientsByInsurance(insurance_id:any): Promise<any>{
    let data = {insurance_id:insurance_id};
    return new Promise ((resolve, reject)=>{
      let test_data = [
      {
        name:'Patient 1',
        patientid: 1,
        visit_date: '10-3-2024',
        insurance_name: 'Prime Insurance',
        insurance_number: 'NA1234'
        
      }
      ];

      resolve(test_data);

      /*this.httpClient.post(this.endpoints.insurance_list, data).subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );*/
     
      

    });
     
  }


  

  saveToken(token: any){
    let token_format = {token:token['authorization']['token'], expiry_time:token['authorization']['expiry_time']} as Token;
    this.localStorageService.put('token',token_format );

  }
}
