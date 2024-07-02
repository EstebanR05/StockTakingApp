import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { IInventory } from 'src/app/shared/interface/inventory.inferface';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent extends BaseComponent implements OnInit {


  public inventory: IInventory[] = []
  constructor(public route: Router) { super() }

  ngOnInit(): void {
  }

}
