import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {LoginService} from '../../assets/shared/login.service';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

    public loginform =  this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

  constructor(private router: Router , private fb: FormBuilder , private _loginService: LoginService,
               private store: Store<AppState>) { }

    ngOnInit() {

    }
    public goToRegisterPage() {
        this.router.navigate(['register']);
    }
    public verifyLogin() {
      this.store.dispatch({ type: 'getLogin'});
      this._loginService.getLoginToken(this.loginform.value).subscribe(data => {
          this.store.select('getToken').subscribe(token => {
             if (token['status'] === 200) {
                 sessionStorage.setItem('token', token['token']);
                 this.loginform.reset();
             }
             else {
                 alert('Not An Authorized User');
                 this.loginform.reset();
             }
             //
          },
    (error) => {

           });
      });


    }

}
