import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAsignationComponent } from './home-asignation.component';

describe('HomeAsignationComponent', () => {
  let component: HomeAsignationComponent;
  let fixture: ComponentFixture<HomeAsignationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAsignationComponent]
    });
    fixture = TestBed.createComponent(HomeAsignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
