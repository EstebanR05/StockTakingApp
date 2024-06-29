import { ReplacementService } from './../../../shared/services/replacement.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { IReplacement } from 'src/app/shared/interface/replacement.interface';

@Component({
  selector: 'app-spareparts-list',
  templateUrl: './spareparts-list.component.html',
  styleUrls: ['./spareparts-list.component.scss']
})
export class SparepartsListComponent extends BaseComponent implements OnInit {
  public spareparts: IReplacement[] = [];
  constructor(private replacementService: ReplacementService, public route: Router) { super(); }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll(): Promise<void> {
    try {
       this.spareparts = await this.replacementService.getAll();
    } catch (error: any) {
      this.handleError(error.error.message);
    }
  }

  async delete(id: number): Promise<void> { 
    try {
      await this.replacementService.delete(id).then(() => this.handleSuccess('success!'));
      await this.getAll();
    } catch (error: any) {
      this.handleError(error.error.message);
    }
   }

}
