import { TestBed, inject } from '@angular/core/testing';

import { MySpecialLoggerService } from './my-special-logger.service';

describe('MySpecialLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySpecialLoggerService]
    });
  });

  it('should ...', inject([MySpecialLoggerService], (service: MySpecialLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
