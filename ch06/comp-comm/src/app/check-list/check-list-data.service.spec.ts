import { TestBed, inject } from '@angular/core/testing';

import { CheckListDataService } from './check-list-data.service';

describe('CheckListDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckListDataService]
    });
  });

  it('should ...', inject([CheckListDataService], (service: CheckListDataService) => {
    expect(service).toBeTruthy();
  }));
});
