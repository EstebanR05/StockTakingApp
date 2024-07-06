import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryManagerComponent } from './inventory-manager/inventory-manager.component';
import { RouterModule } from '@angular/router';
import { invenroryRoutes } from './inventory.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    InventoryListComponent,
    InventoryManagerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, NgSelectModule,
    RouterModule.forChild(invenroryRoutes)
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class InventoryModule { }
