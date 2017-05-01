import { TestBed, inject } from '@angular/core/testing';

import { AnotherLoggerService } from './another-logger.service';

describe('AnotherLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnotherLoggerService]
    });
  });

  it('should ...', inject([AnotherLoggerService], (service: AnotherLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
