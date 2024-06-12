import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { NewPasswordComponent } from './new-password/new-password.component';
import { routes } from './auth.routes';
import { InputOtpModule } from 'primeng/inputotp';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NewPasswordComponent
  ],
  imports: [
    CommonModule,
    InputTextModule, 
    ButtonModule,
    PasswordModule, 
    FormsModule,
    InputOtpModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
