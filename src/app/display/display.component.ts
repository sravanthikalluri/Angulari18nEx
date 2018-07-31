import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

    constructor(private router: Router) {

     }

    ngOnInit() {}

    public goToLoginPage() {
        this.router.navigate(['login']);
    }
    public goToRegisterPage() {
        this.router.navigate(['register']);
    }
    public goToCheckOut() {
        this.router.navigate(['checkout']);
    }

}
