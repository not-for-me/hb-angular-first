import { TestBed, inject } from '@angular/core/testing';

import { ProductListResolverService } from './product-list-resolver.service';

describe('ProductListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListResolverService]
    });
  });

  it('should ...', inject([ProductListResolverService], (service: ProductListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
