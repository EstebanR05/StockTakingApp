import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TablesComponent } from './core/tables/tables.component';
import { IconsComponent } from './core/icons/icons.component';
import { MapsComponent } from './core/maps/maps.component';

export const pagesRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', loadChildren: () => import('src/app/pages/employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'inventory', loadChildren: () => import('src/app/pages/inventory/inventory.module').then(m => m.InventoryModule) },
  { path: 'spareparts', loadChildren: () => import('src/app/pages/spareparts/spareparts.module').then(m => m.SparepartsModule) },
  { path: 'user-profile', component: UserProfileComponent },
  //others or core components of template
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
];
