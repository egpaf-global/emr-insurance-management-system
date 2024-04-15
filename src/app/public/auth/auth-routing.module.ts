import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicRoutes} from "../public.routes";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";

const routes: Routes = [
  {
    path: '',
    title: 'Signin',
    component: SigninComponent,
  },
  {
    title: "Signup",
    path: PublicRoutes.Signup,
    component: SignupComponent
  },
  {
    title: "Signin",
    path: PublicRoutes.Signin,
    component: SigninComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
