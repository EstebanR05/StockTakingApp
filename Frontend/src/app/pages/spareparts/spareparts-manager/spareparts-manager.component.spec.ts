import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparepartsManagerComponent } from './spareparts-manager.component';

describe('SparepartsManagerComponent', () => {
  let component: SparepartsManagerComponent;
  let fixture: ComponentFixture<SparepartsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparepartsManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparepartsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
