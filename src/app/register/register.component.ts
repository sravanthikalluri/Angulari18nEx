import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public registerform =  this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(private router: Router, private fb: FormBuilder ) { }

  ngOnInit() {
  }
   public navigateToLogin() {
        this.router.navigate(['\login']);
   }

}
