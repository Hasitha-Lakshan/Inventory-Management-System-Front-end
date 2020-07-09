import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AvItemsComponent } from './av-items/av-items.component';
import { MiItemsComponent } from './mi-items/mi-items.component';
import { NLoadingComponent } from './nloading/nloading.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'AvItems', component: AvItemsComponent},
  {path: 'MiItems', component: MiItemsComponent},
  {path: 'NLoading', component: NLoadingComponent},

  //otherwise redirect to Home
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
