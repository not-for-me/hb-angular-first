import { TestBed, inject } from '@angular/core/testing';

import { CategoryListResolverService } from './category-list-resolver.service';

describe('CategoryListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryListResolverService]
    });
  });

  it('should ...', inject([CategoryListResolverService], (service: CategoryListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
