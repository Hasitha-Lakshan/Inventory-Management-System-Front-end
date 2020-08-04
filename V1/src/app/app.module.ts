import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryManagerSelectionsComponent } from './inventory-manager-selections/inventory-manager-selections.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ShopsDetailsComponent } from './shops-details/shops-details.component';
import {ShopServiceService} from './shop-service.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    InventoryManagerSelectionsComponent,
    EmployeeDetailsComponent,
    ShopsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ShopServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
