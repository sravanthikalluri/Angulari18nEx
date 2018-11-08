import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {SharedService} from '../assets/shared/shared.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router , private _sharedService: SharedService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('token')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        alert('Your session has been inactive,please login');
        return false;
    }
}
