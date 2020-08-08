import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage'
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { NewuserComponent } from './admin-dashboard/newuser/newuser.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HttpClientInterceptor } from './security/http-client-interceptor';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './security/auth.guard';
import { InventoryManagerSelectionsComponent } from './inventory-manager-dashboard/inventory-manager-selections.component';
import { EmployeeDetailsComponent } from './inventory-manager-dashboard/employee-details/employee-details.component';
import { ShopsDetailsComponent } from './inventory-manager-dashboard/shops-details/shops-details.component'
import { NewLoadingComponent } from './inventory-manager-dashboard/distribution-dashboard/new-loading/new-loading.component'
import { ReportsComponent } from './inventory-manager-dashboard/distribution-dashboard/reports/reports.component'
import { ManageComponent } from './inventory-manager-dashboard/distribution-dashboard/manage/manage.component'
import { DistributionDashboardComponent } from './inventory-manager-dashboard/distribution-dashboard/distribution-dashboard.component';
import { AnalyzerSelectionComponent } from './Analyzer-Dashboard/analyzer-selection/analyzer-selection.component';
import { NavBarComponent } from './Analyzer-Dashboard/nav-bar/nav-bar.component';

export function tokenGetter() {
  return localStorage.getItem("authenticationToken");
}


import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {EmployeeDetailsService} from './Service/employee-details.service';
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    UsersComponent,
    NewuserComponent,
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    routingComponents,
    InventoryManagerSelectionsComponent,
    EmployeeDetailsComponent,
    ShopsDetailsComponent,
    NewLoadingComponent,
    ReportsComponent,
    ManageComponent,
    DistributionDashboardComponent,
    AnalyzerSelectionComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("authenticationToken");
        },
      }
    }),
  ],
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule { }