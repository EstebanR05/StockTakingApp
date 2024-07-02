import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { IInventory } from 'src/app/shared/interface/inventory.inferface';
import { InventoryService } from 'src/app/shared/services/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent extends BaseComponent implements OnInit {

  public inventory: IInventory[] = [];

  constructor(public route: Router, private inventoryService: InventoryService) { super() }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll(): Promise<void> {
    try {
      this.inventory = await this.inventoryService.getAll();
    } catch (error: any) {
      this.handleError(error.error.message);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.inventoryService.delete(id).then(() => this.handleSuccess('success!'));
      await this.getAll();
    } catch (error: any) {
      this.handleError(error.error.message);
    }
  }

}
