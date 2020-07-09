import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryManagerSelectionsComponent } from './inventory-manager-selections/inventory-manager-selections.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ShopsDetailsComponent } from './shops-details/shops-details.component';


export const routes: Routes = [
  {
    path: '',
    component: InventoryManagerSelectionsComponent
  },
  {
    path: 'employeeDetails',
    component: EmployeeDetailsComponent
  },
  {
    path: 'shopDetails',
    component: ShopsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[InventoryManagerSelectionsComponent,EmployeeDetailsComponent,ShopsDetailsComponent]
