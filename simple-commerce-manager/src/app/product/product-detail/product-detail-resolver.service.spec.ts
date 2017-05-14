import { TestBed, inject } from '@angular/core/testing';

import { ProductDetailResolverService } from './product-detail-resolver.service';

describe('ProductDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailResolverService]
    });
  });

  it('should ...', inject([ProductDetailResolverService], (service: ProductDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
