import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewLoadingComponent } from '../app/lorry-dashboard/new-loading/new-loading.component'
import { ReportsComponent } from '../app/lorry-dashboard/reports/reports.component'
import { ManageComponent } from '../app/lorry-dashboard/manage/manage.component'

import { NavbarComponent } from './lorry-dashboard/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NewLoadingComponent,
    ReportsComponent,
    ManageComponent,
    NavbarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
