import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyzerSelectionComponent } from './Analyzer-Dashboard/analyzer-selection/analyzer-selection.component';
import { NavBarComponent } from './Analyzer-Dashboard/nav-bar/nav-bar.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {EmployeeDetailsService} from './Service/employee-details.service';
@NgModule({
  declarations: [
    AppComponent,
    AnalyzerSelectionComponent,
    NavBarComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
