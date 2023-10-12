import { ComponentFixture, TestBed } from '@angular/core/testing';


import {HomeTeenPage} from "@soa/teen/pages";

describe('HomeTeenComponent', () => {
  let component: HomeTeenPage;
  let fixture: ComponentFixture<HomeTeenPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTeenPage]
    });
    fixture = TestBed.createComponent(HomeTeenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
