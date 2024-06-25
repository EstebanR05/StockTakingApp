import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryManagerComponent } from './inventory-manager/inventory-manager.component';
import { RouterModule } from '@angular/router';
import { invenroryRoutes } from './inventory.routing';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InventoryListComponent,
    InventoryManagerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(invenroryRoutes)
  ]
})
export class InventoryModule { }
