import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; */


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent
  ],
  imports: [
    /* NgbModule, */
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
