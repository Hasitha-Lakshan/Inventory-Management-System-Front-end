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
import { NewLoadingComponent } from '../app/lorry-dashboard/new-loading/new-loading.component'
import { ReportsComponent } from '../app/lorry-dashboard/reports/reports.component'
import { ManageComponent } from '../app/lorry-dashboard/manage/manage.component'
import { NavbarComponent } from './lorry-dashboard/navbar/navbar.component';

export function tokenGetter() {
  return localStorage.getItem("authenticationToken");
}

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
    NavbarComponent,
  
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