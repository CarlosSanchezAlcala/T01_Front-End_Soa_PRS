import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionaryInactiveComponent } from './funcionary-inactive.component';

describe('FuncionaryInactiveComponent', () => {
  let component: FuncionaryInactiveComponent;
  let fixture: ComponentFixture<FuncionaryInactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionaryInactiveComponent]
    });
    fixture = TestBed.createComponent(FuncionaryInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
