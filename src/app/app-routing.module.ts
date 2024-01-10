import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin/index', pathMatch: 'full' },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'index', component: DashboardComponent },
      { path: 'index-1', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
