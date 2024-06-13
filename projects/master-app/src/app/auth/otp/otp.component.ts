import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OTPComponent {
  opt: any;
  constructor(private location: Location) {}
  backToURL(){
    this.location.back();
  }
}
