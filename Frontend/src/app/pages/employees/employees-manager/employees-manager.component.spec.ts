import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesManagerComponent } from './employees-manager.component';

describe('EmployeesManagerComponent', () => {
  let component: EmployeesManagerComponent;
  let fixture: ComponentFixture<EmployeesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
