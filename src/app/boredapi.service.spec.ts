import { TestBed } from '@angular/core/testing';

import { BoredapiService } from './boredapi.service';

describe('BoredapiService', () => {
  let service: BoredapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoredapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
