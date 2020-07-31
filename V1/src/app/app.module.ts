import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MenuComponent } from './menu/menu.component';
import { DatafilterComponent } from './datafilter/datafilter.component';
import { FormsModule } from '@angular/forms';
import { GetreportService } from './services/getreport.service';
import { UpdateReportComponent } from './update-report/update-report.component'




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DatafilterComponent,
    UpdateReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [
    GetreportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
