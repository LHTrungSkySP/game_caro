import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  constructor(
    private router: Router,
    private location: Location
  ){
  }
  backToURL(){
    this.location.back();
  }
  routeSetPassword(){
    this.router.navigate(['/auth/new-password']);
  }
  // this.urlCustomer = this.router.serializeUrl(
  //   this.router.createUrlTree(['sm/customer/detail/', this.Activity.accountId])
  // );

}
