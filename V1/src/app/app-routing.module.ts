import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AnalyzerReportsComponent } from './Analyzer-Dashboard/analyzer-reports/analyzer-reports.component';
import{EmployeeDetailsComponent } from './Analyzer-Dashboard/employee-details/employee-details.component';
import { AnalyzerSelectionComponent } from './Analyzer-Dashboard/analyzer-selection/analyzer-selection.component';

export const routes: Routes = [
  {path:'', component:AnalyzerSelectionComponent},
  {path:'report',component: AnalyzerReportsComponent},
  {path:'details',component:EmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AnalyzerReportsComponent,EmployeeDetailsComponent]