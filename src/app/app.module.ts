import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { reducers } from './state/reducers';
import { environment } from '../environments/environment';
import { UserEffects } from './state/user.effects';
import { DashboardEffects } from './dashboard/state/dashboard.effects';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects, DashboardEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Art00',
    }),
    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,
    LoginModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    LoginService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
