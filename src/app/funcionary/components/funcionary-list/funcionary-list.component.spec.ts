import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionaryListComponent } from './funcionary-list.component';

describe('FuncionaryListComponent', () => {
  let component: FuncionaryListComponent;
  let fixture: ComponentFixture<FuncionaryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionaryListComponent]
    });
    fixture = TestBed.createComponent(FuncionaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
