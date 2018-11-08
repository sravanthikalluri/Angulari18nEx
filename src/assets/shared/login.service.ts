import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {AppState} from '../../app/app.state';
import {URLConstants} from '../../app/app.constants';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient ) {

    }
    public getLoginToken() {
        return this.http.get(URLConstants.loginURl).map((res: any) => {
            return res;
        });
    }
}
