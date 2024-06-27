import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../../shared/core/base.component";
import { EmployeesService } from 'src/app/shared/services/employees.service';
import { IEmployees } from 'src/app/shared/interface/employees.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent extends BaseComponent implements OnInit {

  public employeesList: IEmployees[] = [];

  constructor(private employeeService: EmployeesService, public route: Router) {
    super()
  }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll(): Promise<void> {
    try {
      this.employeesList = await this.employeeService.getAll();
    } catch (error: any) {
      this.handleError(error.error.message);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.employeeService.delete(id).then(() => this.handleSuccess('success!'));
      await this.getAll();
    } catch (error: any) {
      this.handleError(error.error.message);
    }
  }

}
