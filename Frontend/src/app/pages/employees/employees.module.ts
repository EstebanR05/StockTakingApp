import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { employeesRoutes } from './employees.routing';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesManagerComponent } from './employees-manager/employees-manager.component';

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesManagerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(employeesRoutes),
  ]
})
export class EmployeesModule { }
