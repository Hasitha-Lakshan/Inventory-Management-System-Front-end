import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportsComponent} from '../app/lorry-dashboard/reports/reports.component'
import {NewLoadingComponent} from '../app/lorry-dashboard/new-loading/new-loading.component'
import {ManageComponent} from '../app/lorry-dashboard/manage/manage.component'
import {NavbarComponent} from '../app/lorry-dashboard/navbar/navbar.component'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path:'navbar',
    component:NavbarComponent
  },

  {
    path:'reports',
    component:ReportsComponent
  },

  {
    path:'new-loading',
    component:NewLoadingComponent
  },

  {
    path:'manage',
    component:ManageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
