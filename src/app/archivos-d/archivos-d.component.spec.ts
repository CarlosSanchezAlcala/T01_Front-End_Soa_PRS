import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivosDComponent } from './archivos-d.component';

describe('ArchivosDComponent', () => {
  let component: ArchivosDComponent;
  let fixture: ComponentFixture<ArchivosDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivosDComponent]
    });
    fixture = TestBed.createComponent(ArchivosDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
