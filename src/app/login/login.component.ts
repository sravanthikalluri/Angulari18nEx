import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {LoginService} from '../../assets/shared/login.service';
import 'rxjs/add/operator/filter';
import {SharedService} from '../../assets/shared/shared.service';

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
    public dd: any = [];

  constructor(private router: Router ,
              private fb: FormBuilder ,
              private _loginService: LoginService,
              private _sharedService: SharedService) {

  }

    ngOnInit() {

    }
    public goToRegisterPage() {
        this.router.navigate(['register']);
    }
    public verifyLogin() {
      this._loginService.getLoginToken().subscribe((data: any) => {
             this.dd = data;
          const result = this.dd.filter(item => {
                  return this.loginform.value['email'] === item.email && this.loginform.value['password'] === item.password;
              });
          if (result) {
              sessionStorage.setItem('token', result[0].token);
              this.loginform.reset();
              this.router.navigate(['']);
              this._sharedService.getHedaersMenu('afterLogin');
          }
          else {
              alert('Not An Authorized User');
              this.loginform.reset();
          }
          });
    }

}
