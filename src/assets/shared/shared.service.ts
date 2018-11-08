import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import set = Reflect.set;
import {URLConstants} from '../../app/app.constants';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../../app/app.state';


@Injectable()
export class SharedService {

    public currentProductToDisplay: object = {};
    constructor(private http: HttpClient, private redux: NgRedux<AppState>) {

    }

    public getProductStock(url) {
        return this.http.get(url).map(res => {
           return res;
        });
    }

    public setProductDetails(product) {
        this.currentProductToDisplay = product;
    }
    public getProductDetails() {
        return this.currentProductToDisplay;
    }

    public getHedaersMenu(type) {
       return this.http.get(URLConstants.hedaersMenuUrl).map(res => {
            return res;
        }).subscribe(data => {
           this.redux.dispatch({type: 'headers', headersMenu: data[type]});
       });
    }

}
