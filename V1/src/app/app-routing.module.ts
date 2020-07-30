import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateReportComponent } from './update-report/update-report.component';
import { DatafilterComponent } from './datafilter/datafilter.component'


const routes: Routes = [
  { path: '', redirectTo: 'invoice-reports', pathMatch: "full" },
  { path: 'invoice-reports', component: DatafilterComponent },
  {path: 'update-report/:id',component:UpdateReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
