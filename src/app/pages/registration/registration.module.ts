import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// icons
import { RegistrationRoutes } from './registration.routing';
// ui components
import { AppCreateComponent } from './create/create.component';
import { AppListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RegistrationRoutes),
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    AppListComponent,
    AppCreateComponent
  ],
})
export class RegistrationModule { }
