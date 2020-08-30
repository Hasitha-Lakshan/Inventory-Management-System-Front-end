import { NgModule } from '@angular/core';
import { Routes, CanActivate, RouterModule } from '@angular/router';
import { AuthGuard } from './security/auth.guard'

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { InventoryManagerSelectionsComponent } from './inventory-manager-dashboard/inventory-manager-selections.component';
import { ShopsDetailsComponent } from './inventory-manager-dashboard/shops-details/shops-details.component';
import { ReportsComponent } from './inventory-manager-dashboard/distribution-dashboard/reports/reports.component';
import { NewLoadingComponent } from './inventory-manager-dashboard/distribution-dashboard/new-loading/new-loading.component';
import { ManageComponent } from './inventory-manager-dashboard/distribution-dashboard/manage/manage.component';
import { DistributionDashboardComponent } from './inventory-manager-dashboard/distribution-dashboard/distribution-dashboard.component';

import { AnalyzerSelectionComponent } from './Analyzer-Dashboard/analyzer-selection.component';
import { AnalyzerReportsComponent } from './Analyzer-Dashboard/analyzer-reports/analyzer-reports.component';
import { EmployeeDetailsComponent } from './Analyzer-Dashboard/employee-details/employee-details.component';
import { UpdateUserStatusComponent } from './admin-dashboard/update-user-status/update-user-status.component';
import { DeleteUserComponent } from './admin-dashboard/delete-user/delete-user.component';
import { StoreHouseDashboardComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-dashboard.component';
import { StoreHouseNewStocksComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-new-stocks/store-house-new-stocks.component';
import { StoreHouseReportsComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-reports/store-house-reports.component';
import { StoredItemsReportComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-reports/stored-items-report/stored-items-report.component';
import { SoldItemsReportComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-reports/sold-items-report/sold-items-report.component';
import { InvoiceReportComponent } from './inventory-manager-dashboard/store-house-dashboard/store-house-reports/invoice-report/invoice-report.component';


const routes: Routes = [
  // Main Components
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_CASH_COLLECTOR' } },
  // Admin Components
  {
    path: 'admin', component: AdminDashboardComponent,
    children: [
      { path: '', component: UsersComponent },
      { path: 'update_user', component: UpdateUserStatusComponent },
      { path: 'delete_user', component: DeleteUserComponent }],
    canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' }
  },
  // Inventory Manager Components
  { path: 'inventory_manager', component: InventoryManagerSelectionsComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_INVENTORY_MANAGER' } },
  { path: 'inventory_manager_employee_details', component: EmployeeDetailsComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_INVENTORY_MANAGER' } },
  { path: 'shop_details', component: ShopsDetailsComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_INVENTORY_MANAGER' } },
  // Inventory Manager Store House Components
  {
    path: 'store_house_dashboard', component: StoreHouseDashboardComponent,
    children: [
      { path: '', component: StoreHouseNewStocksComponent },
      { path: 'store_house_reports', component: StoreHouseReportsComponent }],
    canActivate: [AuthGuard], data: { expectedRole: 'ROLE_INVENTORY_MANAGER' }
  },
  // Inventory Manager Store House Components
  { path: 'stored_items_report', component: StoredItemsReportComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_INVENTORY_MANAGER' } },
  { path: 'sold_items_report', component: SoldItemsReportComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_INVENTORY_MANAGER' } },
  { path: 'invoice_report', component: InvoiceReportComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_INVENTORY_MANAGER' } },
  // Inventory Manager - Distribution Components
  {
    path: 'distribution_dashboard', component: DistributionDashboardComponent,
    children: [
      { path: '', component: NewLoadingComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'manage', component: ManageComponent }],
    canActivate: [AuthGuard], data: { expectedRole: 'ROLE_INVENTORY_MANAGER' }
  },
  // Analyzer Components
  { path: 'analyzer_dashboard', component: AnalyzerSelectionComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ANALYZER' } },
  { path: 'reports', component: AnalyzerReportsComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ANALYZER' } },
  { path: 'analyzer_employee_details', component: EmployeeDetailsComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ANALYZER' } },

  // Auto Redirection for Unknown paths
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = []