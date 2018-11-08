import { Component, OnInit } from '@angular/core';
import {select} from '@angular-redux/store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

    @select() getCartItems;
    public cardItems: object = [];
    @select() quantity:any
  constructor( private router: Router) {

      this.getCartItems.subscribe(data => {
          console.log(data);
          this.cardItems = data;
      });
      this.quantity.subscribe(data => {
          console.log(data);
      });
  }

  ngOnInit() {
  }

  public makePayment() {

  }
  public backToHome() {
    this.router.navigate(['']);
  }
}
