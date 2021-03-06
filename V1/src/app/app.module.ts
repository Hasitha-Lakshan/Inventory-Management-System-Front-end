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
import { UpdateUserStatusComponent } from './admin-dashboard/update-user-status/update-user-status.component';
import { DeleteUserComponent } from './admin-dashboard/delete-user/delete-user.component';
import { StoreHouseDashboardComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-dashboard.component';
import { StoreHouseReportsComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-reports/store-house-reports.component';
import { StoreHouseNewStocksComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-new-stocks/store-house-new-stocks.component';
import { StoredItemsReportComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-reports/stored-items-report/stored-items-report.component';
import { SoldItemsReportComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-reports/sold-items-report/sold-items-report.component';
import { InvoiceReportComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-reports/invoice-report/invoice-report.component';

export function tokenGetter() {
  return localStorage.getItem("authenticationToken");
}

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    UsersComponent,
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
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
    UpdateUserStatusComponent,
    DeleteUserComponent,
    StoreHouseDashboardComponent,
    StoreHouseReportsComponent,
    StoreHouseNewStocksComponent,
    StoredItemsReportComponent,
    SoldItemsReportComponent,
    InvoiceReportComponent

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