import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagementComponent } from './product-management.component';

describe('ProductManagementComponent', () => {
  let component: ProductManagementComponent;
  let fixture: ComponentFixture<ProductManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
