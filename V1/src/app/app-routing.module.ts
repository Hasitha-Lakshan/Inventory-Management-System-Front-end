import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './admin-dashboard/users/users.component';
import{NewuserComponent} from './admin-dashboard/newuser/newuser.component';

  
  
 
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth.guard'


const routes: Routes = [
  {
    path:'newuser',
    component:NewuserComponent

  },
  {
    path:'users',
    component:UsersComponent
  },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
