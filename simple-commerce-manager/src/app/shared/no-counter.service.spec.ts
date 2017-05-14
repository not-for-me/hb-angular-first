import { TestBed, inject } from '@angular/core/testing';

import { NoCounterService } from './no-counter.service';

describe('NoCounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoCounterService]
    });
  });

  it('should ...', inject([NoCounterService], (service: NoCounterService) => {
    expect(service).toBeTruthy();
  }));
});
