import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { AppSecondComponent } from './second/second.component';
import { AppOneComponent } from './one/one.component';

export const PagesRoutes: Routes = [

  {
    path: 'dashboard',
    component: AppDashboardComponent,

  },
  {
    path: 'one',
    component: AppOneComponent,

  },
  {
    path: 'second',
    component: AppSecondComponent,

  },
];
