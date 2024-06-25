import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparepartsListComponent } from './spareparts-list.component';

describe('SparepartsListComponent', () => {
  let component: SparepartsListComponent;
  let fixture: ComponentFixture<SparepartsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparepartsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparepartsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
