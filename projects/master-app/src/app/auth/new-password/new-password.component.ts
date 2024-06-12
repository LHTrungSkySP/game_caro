import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss'
})
export class NewPasswordComponent {
  opt: any;
  password: string = '';
  passwordComfirm: string = '';
  constructor(private location: Location) {}
  backToURL(){
    this.location.back();
  }
}
