import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from '../elements/header/header.component';
import { FooterComponent } from '../elements/footer/footer.component';
import { NavHeaderComponent } from '../elements/nav-header/nav-header.component';
import { NavigationComponent } from '../elements/navigation/navigation.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppCreateComponent } from '../pages/registration/create/create.component';
import { AppListComponent } from '../pages/registration/list/list.component';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    NavHeaderComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'admin', component: AdminComponent, children: [
          { path: '', component: DashboardComponent },
          { path: 'index', component: DashboardComponent },
          { path: 'index-1', component: DashboardComponent },
          { path: 'dashboard', component: DashboardComponent },

          { path: 'create', component: AppCreateComponent },
          { path: 'list', component: AppListComponent },
          // { path: '', loadChildren: () => import('../pages/registration/registration.module').then(m => m.RegistrationModule) },
        ]
      },
    ]),
  ],
})
export class AdminModule {}
