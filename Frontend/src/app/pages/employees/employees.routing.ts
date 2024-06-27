import { Routes } from "@angular/router";

import { EmployeesListComponent } from "./employees-list/employees-list.component";
import { EmployeesManagerComponent } from "./employees-manager/employees-manager.component";

export const employeesRoutes: Routes = [
    { path: 'list', component: EmployeesListComponent },
    { path: 'create', component: EmployeesManagerComponent },
    { path: 'update/:id', component: EmployeesManagerComponent }
];