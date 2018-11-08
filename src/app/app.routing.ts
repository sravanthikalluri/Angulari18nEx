import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './app.authguard';
import {DisplayComponent} from './display/display.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ShoesComponent} from './shoes/shoes.component';
import {AccessoriesComponent} from './accessories/accessories.component';
import {WatchesComponent} from './watches/watches.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ProductInfoComponent} from './product-info/product-info.component';
import {LogoutComponent} from '../assets/shared/logout.component';


const appRoutes: Routes = [
    {
         path: '',
        component: DisplayComponent,
        data: {
            breadcrumb: ''
        },
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'checkout',
                component: CheckoutComponent,
                canActivate: [AuthGuard],
                data: {
                    breadcrumb: 'checkout'
                }
            },
            {
                path: 'shoes',
                component: ShoesComponent,
                data: {
                    breadcrumb: 'shoes'
                }
            },
            {
                path: 'watches',
                component: WatchesComponent,
                data: {
                    breadcrumb: 'watches'
                }
            },
            {
                path: 'shoppingcart',
                component: ShoppingCartComponent,
                data: {
                    breadcrumb: 'cart'
                }
            },
            {
                path: 'accessories',
                component: AccessoriesComponent,
                data: {
                    breadcrumb: 'accessories'
                }
            },
            {
                path: ':path/:name',
                component: ProductInfoComponent,
                data: {
                    product: {}
                }
            },
            {
                path: 'logout',
                component: LogoutComponent
            }
        ]
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
