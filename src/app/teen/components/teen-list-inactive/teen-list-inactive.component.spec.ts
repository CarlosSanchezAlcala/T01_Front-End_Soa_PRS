import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenListInactiveComponent } from './teen-list-inactive.component';

describe('TeenListInactiveComponent', () => {
  let component: TeenListInactiveComponent;
  let fixture: ComponentFixture<TeenListInactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeenListInactiveComponent]
    });
    fixture = TestBed.createComponent(TeenListInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
