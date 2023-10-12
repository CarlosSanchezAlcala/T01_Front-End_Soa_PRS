import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationListComponent } from './asignation-list.component';

describe('AsignationListComponent', () => {
  let component: AsignationListComponent;
  let fixture: ComponentFixture<AsignationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignationListComponent]
    });
    fixture = TestBed.createComponent(AsignationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
