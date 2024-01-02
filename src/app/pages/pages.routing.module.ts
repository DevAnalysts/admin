import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { AppSecondComponent } from './second/second.component';

export const PagesRoutes: Routes = [

  {
    path: 'dashboard',
    component: AppDashboardComponent,

  },
  {
    path: 'second',
    component: AppSecondComponent,

  },
];
