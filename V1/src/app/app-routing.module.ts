import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './admin-dashboard/users/users.component';
import{NewuserComponent} from './admin-dashboard/newuser/newuser.component';
const routes: Routes = [
  {
    path:'newuser',
    component:NewuserComponent

  },
  {
    path:'users',
    component:UsersComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
