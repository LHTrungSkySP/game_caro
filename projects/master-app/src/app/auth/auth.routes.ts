import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { RegisterComponent } from './register/register.component';
import { DeniedAccessComponent } from './denied-access/denied-access.component';
import { OTPComponent } from './otp/otp.component';
import { AuthComponent } from './auth.component';

export const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "forgot-password",
        component: ForgotPasswordComponent
      },
      {
        path: "new-password",
        component: NewPasswordComponent
      },
      {
        path: "denied-access",
        component: DeniedAccessComponent
      },
      {
        path: "otp",
        component: OTPComponent
      },
    ]
  }
];
