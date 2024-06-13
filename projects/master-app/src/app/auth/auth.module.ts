import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
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
import { OTPComponent } from './otp/otp.component';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NewPasswordComponent,
    OTPComponent
  ],
  imports: [
    CommonModule,
    RouterLink, 
    RouterModule,
    InputTextModule, 
    ButtonModule,
    PasswordModule, 
    FormsModule,
    InputOtpModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
