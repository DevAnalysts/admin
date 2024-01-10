import { Routes } from '@angular/router';
// ui
import { AppListingComponent } from './listing/listing.component';
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
        path: 'listing',
        component: AppListingComponent,
      },
      {
        path: 'create',
        component: AppCreateComponent,
      },
    ],
  },
];
