import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { AppSecondComponent } from './second/second.component';

export const PagesRoutes: Routes = [

  {
    path: '',
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },
  {
    path: '',
    component: AppSecondComponent,
    data: {
      title: 'Second Page',
    },
  },
];
