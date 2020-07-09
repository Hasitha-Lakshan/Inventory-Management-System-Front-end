import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvItemsComponent } from './av-items/av-items.component';
import { MiItemsComponent } from './mi-items/mi-items.component';
import { NLoadingComponent } from './nloading/nloading.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AvItemsComponent,
    MiItemsComponent,
    NLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
