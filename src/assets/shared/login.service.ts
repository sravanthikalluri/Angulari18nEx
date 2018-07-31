import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Store} from '@ngrx/store';
import {AppState} from '../../app/app.state';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient , private store: Store<AppState>) {

    }
    public getLoginToken(data) {
        let url  = '';
        this.store.select('getData').subscribe(urlString =>
            url = urlString
        );
        return this.http.get(url)
                .map(payload => (this.store.dispatch({ type: 'setLoginData', payload , data})));

    }
}
