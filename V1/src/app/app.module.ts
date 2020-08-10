import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage'
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './invoice-report/menu/menu.component';
import { DatafilterComponent } from './invoice-report/datafilter/datafilter.component';
import { InvoiceService } from './services/invoice.service';
import { UpdateReportComponent } from './invoice-report/update-report/update-report.component'
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
import { ShopsDetailsComponent } from './inventory-manager-dashboard/shops-details/shops-details.component'
import { NewLoadingComponent } from './inventory-manager-dashboard/distribution-dashboard/new-loading/new-loading.component'
import { ReportsComponent } from './inventory-manager-dashboard/distribution-dashboard/reports/reports.component'
import { ManageComponent } from './inventory-manager-dashboard/distribution-dashboard/manage/manage.component'
import { DistributionDashboardComponent } from './inventory-manager-dashboard/distribution-dashboard/distribution-dashboard.component';
import { AnalyzerSelectionComponent } from './Analyzer-Dashboard/analyzer-selection.component';
import { AnalyzerReportsComponent } from './Analyzer-Dashboard/analyzer-reports/analyzer-reports.component';
import { EmployeeDetailsComponent } from './Analyzer-Dashboard/employee-details/employee-details.component';
import { StoreHouseDashboardComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-dashboard.component';
import { StoreHouseReportsComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-reports/store-house-reports.component';
import { StoreHouseNewStocksComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-new-stocks/store-house-new-stocks.component';

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
    AppComponent,
    MenuComponent,
    DatafilterComponent,
    UpdateReportComponent,
    routingComponents,
    InventoryManagerSelectionsComponent,
    ShopsDetailsComponent,
    NewLoadingComponent,
    ReportsComponent,
    ManageComponent,
    DistributionDashboardComponent,
    AnalyzerSelectionComponent,
    AnalyzerReportsComponent,
    EmployeeDetailsComponent,
    StoreHouseDashboardComponent,
    StoreHouseReportsComponent,
    StoreHouseNewStocksComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
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
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true },InvoiceService],

  bootstrap: [AppComponent]
})
export class AppModule { }