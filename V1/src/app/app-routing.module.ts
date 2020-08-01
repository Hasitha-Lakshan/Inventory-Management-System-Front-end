import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateReportComponent } from './invoice-report/update-report/update-report.component';
import { DatafilterComponent } from './invoice-report/datafilter/datafilter.component'
import { AuthGuard } from './auth.guard'

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { NewuserComponent } from './admin-dashboard/newuser/newuser.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'newuser', component: NewuserComponent },
  { path: 'users', component: UsersComponent },
  { path: 'invoice-reports', component: DatafilterComponent },
  {path: 'update-report/:id',component:UpdateReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
