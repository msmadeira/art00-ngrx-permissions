import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from "@angular/material/slider";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from "./login/login.module";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LoginModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
