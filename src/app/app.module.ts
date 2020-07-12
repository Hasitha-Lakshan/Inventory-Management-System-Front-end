import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewproductsComponent } from './newproducts/newproducts.component';
import { ReportsComponent } from './reports/reports.component';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewproductsComponent,
    ReportsComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
