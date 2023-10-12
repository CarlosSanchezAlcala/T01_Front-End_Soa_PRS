import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTeenagerComponent } from './home-teenager.component';

describe('HomeTeenagerComponent', () => {
  let component: HomeTeenagerComponent;
  let fixture: ComponentFixture<HomeTeenagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTeenagerComponent]
    });
    fixture = TestBed.createComponent(HomeTeenagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
