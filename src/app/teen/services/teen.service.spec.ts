import { TestBed } from '@angular/core/testing';

import {TeenService} from "@soa/teen/services/teen.service";

describe('TeenService', () => {
  let service: TeenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
