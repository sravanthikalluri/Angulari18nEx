import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './app.authguard';
import {DisplayComponent} from './display/display.component';
import {CheckoutComponent} from './checkout/checkout.component';


const appRoutes: Routes = [
    {
         path: '',
        component: DisplayComponent,
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
                canActivate: [AuthGuard]
            }
        ]
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
