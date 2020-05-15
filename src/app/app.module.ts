import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

import { AppRoutingModule } from "./app-routing.module";

const NGXS_MODULES = [
  NgxsModule.forRoot([], {
    developmentMode: true,
  }),
  NgxsFormPluginModule.forRoot(),
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NGXS_MODULES,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap:[AppComponent],
})
export class AppModule { }
