import { TestBed, inject } from '@angular/core/testing';

import { I18nSupportService } from './i18n-support.service';

describe('I18nSupportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [I18nSupportService]
    });
  });

  it('should ...', inject([I18nSupportService], (service: I18nSupportService) => {
    expect(service).toBeTruthy();
  }));
});
