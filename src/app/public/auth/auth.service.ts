import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Signin} from "./signin/signin.model";
import {Token} from "./signin/signin.model";
import {Observable} from "rxjs";
import {AuthResponse} from "./auth.response";
import {environment} from "../../../environments/environment";
import {LocalStorageService} from "../../shared/services/localStorage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoints: any = {
    signin: environment.endpoints.login,
    verify_token: environment.endpoints.verify_token
  };
 
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService) { }

  signIn(data: Signin): Promise<any>{

    return new Promise ((resolve, reject)=>{
      this.httpClient.post(this.endpoints.signin, data).subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
     
      

    });
     
  }
  verifyToken(data: Token): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.endpoints.signin, data);
  }

  saveToken(token: any){
    let token_format = {token:token['authorization']['token'], expiry_time:token['authorization']['expiry_time']} as Token;
    this.localStorageService.put('token',token_format );

  }
}
