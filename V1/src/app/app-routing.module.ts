import { NgModule } from '@angular/core';
import { Routes, CanActivate, RouterModule } from '@angular/router';
import { AuthGuard } from './security/auth.guard'

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { NewuserComponent } from './admin-dashboard/newuser/newuser.component';
import { InventoryManagerSelectionsComponent } from './inventory-manager-dashboard/inventory-manager-selections.component';
import { EmployeeDetailsComponent } from './inventory-manager-dashboard/employee-details/employee-details.component';
import { ShopsDetailsComponent } from './inventory-manager-dashboard/shops-details/shops-details.component';
import { ReportsComponent } from './inventory-manager-dashboard/distribution-dashboard/reports/reports.component';
import { NewLoadingComponent } from './inventory-manager-dashboard/distribution-dashboard/new-loading/new-loading.component';
import { ManageComponent } from './inventory-manager-dashboard/distribution-dashboard/manage/manage.component';
import { DistributionDashboardComponent } from './inventory-manager-dashboard/distribution-dashboard/distribution-dashboard.component';


const routes: Routes = [
  // Main Components
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ANALYZER' } },
  // Admin Components
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' } },
  { path: 'newuser', component: NewuserComponent },
  { path: 'users', component: UsersComponent },
  // Inventory Manager Components
  { path: 'inventory_manager', component: InventoryManagerSelectionsComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_INVENTORY_MANAGER' } },
  { path: 'employee_details', component: EmployeeDetailsComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_INVENTORY_MANAGER' } },
  { path: 'shop_details', component: ShopsDetailsComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_INVENTORY_MANAGER' } },
  // Inventory Manager - Distribution Components
  {
    path: 'distribution_dashboard', component: DistributionDashboardComponent,
    children: [
      { path: '', component: NewLoadingComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'manage', component: ManageComponent }],
    canActivate: [AuthGuard], data: { expectedRole: 'ROLE_INVENTORY_MANAGER' }
  },
  // Auto Redirection for Unknown paths
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InventoryManagerSelectionsComponent, EmployeeDetailsComponent, ShopsDetailsComponent]
