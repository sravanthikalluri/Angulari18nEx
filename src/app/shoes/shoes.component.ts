import { Component, OnInit } from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../app.state';
import {SharedService} from '../../assets/shared/shared.service';
import {URLConstants} from '../app.constants';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

    public productDetails: object = [];
  constructor(private _sharedService: SharedService) {

  }

  ngOnInit() {
     this._sharedService.getProductStock(URLConstants.shoesURL).subscribe(data => {
         this.productDetails = data;
     });
  }


}
