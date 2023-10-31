import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFormTransferComponent } from './dashboard-form-transfer.component';

describe('DashboardFormTransferComponent', () => {
  let component: DashboardFormTransferComponent;
  let fixture: ComponentFixture<DashboardFormTransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardFormTransferComponent]
    });
    fixture = TestBed.createComponent(DashboardFormTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
