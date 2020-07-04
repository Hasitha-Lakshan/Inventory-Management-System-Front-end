import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportsComponent} from './reports/reports.component';
import {NewLoadingComponent} from './new-loading/new-loading.component';
import {ManageComponent} from './manage/manage.component'
import { from } from 'rxjs';

const routes: Routes = [
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
