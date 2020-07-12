import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component'
import {ContainerComponent} from './container/container.component'
import {NewproductsComponent} from './newproducts/newproducts.component'
import { from } from 'rxjs';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'container',
    component:ContainerComponent
  },
  {
    path:'newproduct',
    component:NewproductsComponent
  },
  {
    path:'reports',
    component:ReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
