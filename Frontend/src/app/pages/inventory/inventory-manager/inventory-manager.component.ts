import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { IInventory } from 'src/app/shared/interface/inventory.inferface';
import { IReplacement } from 'src/app/shared/interface/replacement.interface';
import { InventoryService } from 'src/app/shared/services/inventory.service';
import { ReplacementService } from 'src/app/shared/services/replacement.service';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-inventory-manager',
  templateUrl: './inventory-manager.component.html',
  styleUrls: ['./inventory-manager.component.scss']
})
export class InventoryManagerComponent extends BaseComponent implements OnInit {

  public id: any = this.ActiveRoute.snapshot.paramMap.get('id');
  public spareparts: IReplacement[] = [];
  selectedproduct: any;
  test = []

  constructor(
    public location: Location,
    public route: Router,
    private inventoryService: InventoryService,
    private fb: FormBuilder,
    private ActiveRoute: ActivatedRoute,
    private replacementService: ReplacementService,
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      sparePart: ['', Validators.required],
      value: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required],
      saleDate: ['', Validators.required],
    });

    this.getAllSpareParts();

    if (this.id) {
      this.getValuesForm();
    }
  }

  async getAllSpareParts(): Promise<void> {
    try {
       this.spareparts = await this.replacementService.getAll();
       this.test = this.spareparts.map(item => ({
        id: item.id,
        sparePart: item.sparePart + ' - ' + item.brand
      }));
  
    } catch (error: any) {
      this.handleError(error.error.message);
    }
  }

  async getValuesForm(): Promise<void> {
    try {
      const result: IInventory = await this.inventoryService.getById(this.id);
      

      const date = new Date(result.date);
      const saleDate = new Date(result.saleDate);

      this.form.patchValue({
        sparePart: result.sparePart,
        value: result.value,
        amount: result.amount,
        date: date.toISOString().split('T')[0],
        saleDate: saleDate.toISOString().split('T')[0],
      });
    } catch (error) {
      console.error('Error fetching task', error);
    }
  }

  async submit(): Promise<any> {
    if (this.form.invalid) return this.handleError('porfavor ingrese la informacion faltante');

    if (this.id) {
      await this.inventoryService.update(this.id, this.form.value);
    } else {
      this.inventoryService.create(this.form.value)
    }
    await this.handleSuccess('success');
    return this.route.navigate(['/inventory/list']); 
  }

}
