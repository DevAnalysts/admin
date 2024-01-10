import { Routes } from '@angular/router';
// ui
import { AppListComponent } from './list/list.component';
import { AppCreateComponent } from './create/create.component';

export const RegistrationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/registration',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: AppListComponent,
      },
      {
        path: 'create',
        component: AppCreateComponent,
      },
    ],
  },
];
