import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { IEmployees } from 'src/app/shared/interface/employees.interface';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-manager',
  templateUrl: './employees-manager.component.html',
  styleUrls: ['./employees-manager.component.scss']
})
export class EmployeesManagerComponent extends BaseComponent implements OnInit {

  public id: any = this.ActiveRoute.snapshot.paramMap.get('id');

  constructor(
    public location: Location,
    private employeeService: EmployeesService,
    private ActiveRoute: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router,
  ) { super() }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      age: ['', Validators.required],
      staff: ['', Validators.required],
      company: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      aboutMe: ['', Validators.required],
      userInformation: ['', Validators.required],
    });

    if (this.id) {
      this.getValuesForm();
    }
  }

  async getValuesForm(): Promise<void> {
    try {
      const result: IEmployees = await this.employeeService.getById(this.id);

      this.form.patchValue({
        name: result.name,
        lastName: result.lastName,
        email: result.email,
        username: result.username,
        age: result.age,
        staff: result.staff,
        company: result.company,
        address: result.address,
        phone: result.phone,
        city: result.city,
        country: result.country,
        postalCode: result.postalCode,
        aboutMe: result.aboutMe,
        userInformation: result.userInformation,
      });

    } catch (error) {
      console.error('Error fetching task', error);
    }
  }

  async submit(): Promise<any> {
    if (this.form.invalid) return this.handleError('campos invalidos');

    if (this.id) {
      await this.employeeService.update(this.id, this.form.value);
    } else {
      await this.employeeService.create(this.form.value);
    }

    this.route.navigate(['/employees/list']);
    return Swal.fire('Saved!', '', 'success');
  }

}
