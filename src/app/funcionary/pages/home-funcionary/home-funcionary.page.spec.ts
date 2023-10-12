import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFuncionaryPage } from '@soa/funcionary/pages';

describe('HomeFuncionaryComponent', () => {
  let component: HomeFuncionaryPage;
  let fixture: ComponentFixture<HomeFuncionaryPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFuncionaryPage]
    });
    fixture = TestBed.createComponent(HomeFuncionaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
