import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from '../../../node_modules/rxjs/operator/switchMap';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../app.state';
import {SharedService} from '../../assets/shared/shared.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

   public productDetails: any ;
   public mode: String = 'add';
   @ViewChild('fullSizeImage') myFullresImage: ElementRef;
    constructor(private routeParms: ActivatedRoute, private redux: NgRedux<AppState>,
                private _sharedService: SharedService,
                 private router: Router ) {
          this.productDetails = this._sharedService.getProductDetails();
    }

  ngOnInit() {

  }
    public addToCart(product, mode) {
        if ( mode === 'add') {
            this.mode = 'added';
            this.redux.dispatch({type: 'add', cartList: product});
        }
        else {
            this.mode = 'add';
            this.router.navigate(['shoppingcart']);
        }

    }
    public updateQuantity(event) {
        this.productDetails['quantity'] = +event.target.value;
    }


}
