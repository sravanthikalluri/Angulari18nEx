import {Component, Input, OnInit} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../app.state';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {SharedService} from '../../assets/shared/shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    @Input() productDetails: object;
    public currentUrl: string;
  constructor(private redux: NgRedux<AppState>,
              private router: Router,
              private _sharedService: SharedService,
              ) { }


   ngOnInit() {
        this.currentUrl = this.router.url;
   }

    public addToCart(product) {
        this.redux.dispatch({type: 'add', cartList: product});
    }
    public showProduct(product) {
        this._sharedService.setProductDetails(product);
       this.router.navigate([ this.currentUrl , product.name]);
    }
}
