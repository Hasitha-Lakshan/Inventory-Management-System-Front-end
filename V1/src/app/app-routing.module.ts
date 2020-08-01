import { NgModule, Component } from '@angular/core';
import { Routes, CanActivate, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard'
import { RoleGuard } from './role.guard'

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { NewuserComponent } from './admin-dashboard/newuser/newuser.component';

export const routes: Routes = [


  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent, canActivate: [RoleGuard], data: { expectedRole: 'ROLE_ANALYZER' } },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [RoleGuard], data: { expectedRole: 'ROLE_ADMIN' } },
  { path: 'newuser', component: NewuserComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
