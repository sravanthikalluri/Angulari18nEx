import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../assets/shared/shared.service';
import {URLConstants} from '../app.constants';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

    public productDetails: object = [];
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
     this._sharedService.getProductStock(URLConstants.watchesURL).subscribe(data => {
         this.productDetails = data;
     });
  }

}
