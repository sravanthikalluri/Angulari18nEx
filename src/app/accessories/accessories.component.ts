import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../assets/shared/shared.service';
import {URLConstants} from '../app.constants';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

    public productDetails: object = [];
    constructor(private _sharedService: SharedService) { }

    ngOnInit() {
        this._sharedService.getProductStock(URLConstants.accessioriesURL).subscribe(data => {
            this.productDetails = data;
        });
    }

}
