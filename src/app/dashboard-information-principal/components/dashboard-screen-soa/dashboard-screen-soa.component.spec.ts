import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardScreenSoaComponent } from './dashboard-screen-soa.component';

describe('DashboardScreenSoaComponent', () => {
  let component: DashboardScreenSoaComponent;
  let fixture: ComponentFixture<DashboardScreenSoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardScreenSoaComponent]
    });
    fixture = TestBed.createComponent(DashboardScreenSoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
