import { Routes } from "@angular/router";
import { SparepartsListComponent } from "./spareparts-list/spareparts-list.component";
import { SparepartsManagerComponent } from "./spareparts-manager/spareparts-manager.component";

export const sparePartsRoutes: Routes = [
    { path: 'list', component: SparepartsListComponent },
    { path: 'manager', component: SparepartsManagerComponent }
];