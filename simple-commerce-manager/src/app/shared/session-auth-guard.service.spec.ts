import { TestBed, inject } from '@angular/core/testing';

import { SessionAuthGuardService } from './session-auth-guard.service';

describe('SessionAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionAuthGuardService]
    });
  });

  it('should ...', inject([SessionAuthGuardService], (service: SessionAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
