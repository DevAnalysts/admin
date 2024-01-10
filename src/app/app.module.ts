import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedService} from './shared.service';

/* #########################  SITE PAGES COMPONENT ###################*/
import { AdminModule } from './admin/admin.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BlankComponent } from './elements/blank/blank.component';



@NgModule({
  declarations: [
    AppComponent,
    BlankComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    DashboardModule,
  ],

  providers: [
		SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
