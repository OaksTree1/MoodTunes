import { TestBed } from '@angular/core/testing';

import { RuntimeAuthCodesService } from './runtime-auth-codes.service';

describe('RuntimeAuthCodesService', () => {
  let service: RuntimeAuthCodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuntimeAuthCodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
