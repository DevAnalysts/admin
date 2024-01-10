import { Routes } from '@angular/router';

import { AppSideLoginComponent } from './login/login.component';
import { AppSideRegisterComponent } from './register/register.component';
import { AppSideLockScreenComponent } from './lock-screen/lock-screen.component';
import { AppSideForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: AppSideLoginComponent,
      },
      {
        path: 'register',
        component: AppSideRegisterComponent,
      },
      {
        path: 'lock-screen',
        component: AppSideLockScreenComponent,
      },
      {
        path: 'forgot-password',
        component: AppSideForgotPasswordComponent,
      },
    ],
  },
];
