import { TestBed, inject } from '@angular/core/testing';

import { ProductBulkUpdaterService } from './product-bulk-updater.service';

describe('ProductBulkUpdaterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductBulkUpdaterService]
    });
  });

  it('should ...', inject([ProductBulkUpdaterService], (service: ProductBulkUpdaterService) => {
    expect(service).toBeTruthy();
  }));
});
