import { TestBed } from '@angular/core/testing';

import { PullUserDataService } from './pull-user-data.service';

describe('PullUserDataService', () => {
  let service: PullUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PullUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
