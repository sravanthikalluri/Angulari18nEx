import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';

import {HttpClientModule} from '@angular/common/http';
import {AppTranslationModule} from './app.translation.module';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

import {appRouting} from './app.routing';
import {getDataTokenReducer, getDataUrlReducer} from './app.reducer';
import {AuthGuard} from './app.authguard';
import {CheckoutComponent} from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule,
    StoreModule.forRoot({getData: getDataUrlReducer , getToken: getDataTokenReducer}),
    ReactiveFormsModule,
    AppTranslationModule,
    appRouting
  ],
  providers: [TranslateService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
