import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';

// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatNativeDateModule} from '@angular/material/core';
import { MenuComponent } from './invoice-report/menu/menu.component';
import { DatafilterComponent } from './invoice-report/datafilter/datafilter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetreportService } from './services/getreport.service';
import { UpdateReportComponent } from './invoice-report/update-report/update-report.component'


import { NgxWebstorageModule } from 'ngx-webstorage'

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { NewuserComponent } from './admin-dashboard/newuser/newuser.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HttpClientInterceptor } from './http-client-interceptor';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    UsersComponent,
    NewuserComponent,
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
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
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true},GetreportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
