import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sparePartsRoutes } from './spareparts.routing';
import { SparepartsListComponent } from './spareparts-list/spareparts-list.component';
import { SparepartsManagerComponent } from './spareparts-manager/spareparts-manager.component';



@NgModule({
  declarations: [
    SparepartsListComponent,
    SparepartsManagerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(sparePartsRoutes)
  ]
})
export class SparepartsModule { }
