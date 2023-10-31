import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInformationPrincipalComponent } from './dashboard-information-principal.component';

describe('DashboardInformationPrincipalComponent', () => {
  let component: DashboardInformationPrincipalComponent;
  let fixture: ComponentFixture<DashboardInformationPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardInformationPrincipalComponent]
    });
    fixture = TestBed.createComponent(DashboardInformationPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
