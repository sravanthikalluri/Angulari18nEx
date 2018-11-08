import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { select} from '@angular-redux/store';
import {unescape} from 'querystring';
import {SharedService} from '../../assets/shared/shared.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

    public cartCount: Number = 0;
    @select() quantity;
    @select() getCartItems: any;
    @select() headersMenu: any;
    public previousUrl;
    public currentUrl;
    public breadcrumbs$: any = [];
    constructor(private router: Router) {
        this.quantity.subscribe(data => {
            this.cartCount = data;
        });
        this.currentUrl = this.router.url;
        router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(e => {
                this.breadcrumbs$ = [];
                this.previousUrl = this.currentUrl;
                this.currentUrl = e['url'].replace(/%20/g, ' ').substr(1);
                this.breadcrumbs$ = this.currentUrl ? (this.currentUrl.split('/')) : null ;
            });
}

    ngOnInit() {

    }

     public goToCart(page) {
        this.router.navigate([page]);
    }


}
