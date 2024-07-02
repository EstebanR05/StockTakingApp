import { Routes } from "@angular/router";
import { InventoryListComponent } from "./inventory-list/inventory-list.component";
import { InventoryManagerComponent } from "./inventory-manager/inventory-manager.component";


export const invenroryRoutes: Routes = [
    { path: 'list', component: InventoryListComponent },
    { path: 'create', component: InventoryManagerComponent },
    { path: 'update/:id', component: InventoryManagerComponent }
];