import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';

import {HttpClientModule} from '@angular/common/http';
import {AppTranslationModule} from './app.translation.module';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

import {appRouting} from './app.routing';
import {AuthGuard} from './app.authguard';
import {CheckoutComponent} from './checkout/checkout.component';
import {AppState, cartReducer, INITIAL_STATE} from './app.state';

import {NgRedux, NgReduxModule} from '@angular-redux/store';
import { ShoesComponent } from './shoes/shoes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { WatchesComponent } from './watches/watches.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {SharedService} from '../assets/shared/shared.service';
import {ClothesComponent} from './clothes/clothes.component';
import {ProductInfoComponent} from './product-info/product-info.component';
import {NgxImgZoomModule} from 'ngx-img-zoom';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import {LogoutComponent} from '../assets/shared/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    ShoesComponent,
    AccessoriesComponent,
    WatchesComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ClothesComponent,
    ProductInfoComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule,
    NgReduxModule,
    ReactiveFormsModule,
    AppTranslationModule,
    NgxImageZoomModule.forRoot(),
    appRouting
  ],
  providers: [TranslateService, AuthGuard, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor (ngRedux: NgRedux <any>, private sharedService: SharedService) {
        ngRedux.configureStore(cartReducer, INITIAL_STATE);
        const type = sessionStorage.getItem('token') ? 'afterLogin' : 'beforeLogin'
        this.sharedService.getHedaersMenu(type);
    }
}
