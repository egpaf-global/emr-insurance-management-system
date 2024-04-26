import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatetimeHelper } from 'src/app/_core/helpers/datetime.helper';
import { CommonService } from 'src/app/_core/services/common.service';
import { ElementRoutes } from 'src/app/admin/admin.routes';
import { AppRoutes } from 'src/app/app.routes';
import { pageTransition } from 'src/app/shared/utils/animations';
import { Images } from 'src/assets/data/images';
import { AlertType } from '../../../shared/components/alert/alert.type';
import { PublicRoutes } from '../../public.routes';
import { AuthService } from '../auth.service';
import {Signin} from "../signin/signin.model";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [pageTransition],
})
export class SigninComponent {
  readonly signinBannerImage: string = Images.bannerLogo;

  isLoading: boolean = false;
  readonly publicRoutes = PublicRoutes;
  readonly currentYear: number = DatetimeHelper.currentYear;

  serverErrors: string[] = [];

  signInForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });

  constructor(
    public commonService: CommonService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {


  }
  protected readonly AlertType = AlertType;

  protected onFormSubmitHandler = (event: SubmitEvent) => {
    event.preventDefault();
    this.isLoading = true;
    console.log('event',this.signInForm.value.username);
    let data = {username:this.signInForm.value.username, password:this.signInForm.value.password} as Signin;
    this.authService.signIn(data).then((result)=>{
      this.isLoading = false;
      console.log('login results:',result);
      this.router.navigate([AppRoutes.Admin, ElementRoutes.InsuredClients]);
      

    },(error)=>{
      this.isLoading = false;
      let message = 'Invalid username';
      this.onAlertCloseHandler(message);
      console.log('error:',error);
    });
    //
    /*

    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate([AppRoutes.Admin, ElementRoutes.DataTable]);
    }, 3000);
    */
  };

  protected onAlertCloseHandler = (e: any) => {
    this.serverErrors = [];
    this.serverErrors.push(e);
  };
}
