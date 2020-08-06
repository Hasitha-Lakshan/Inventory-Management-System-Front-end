import { TestBed } from '@angular/core/testing';

import { LorryServiceService } from './lorry-service.service';

describe('LorryServiceService', () => {
  let service: LorryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LorryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
