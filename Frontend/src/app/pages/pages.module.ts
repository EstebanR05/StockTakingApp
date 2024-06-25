import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pagesRoutes } from './pages.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';

import { MapsComponent } from './core/maps/maps.component';
import { IconsComponent } from './core/icons/icons.component';
import { TablesComponent } from './core/tables/tables.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    EmployeesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    RouterModule.forChild(pagesRoutes)
  ]
})
export class PagesModule { }
