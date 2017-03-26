import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management/product-management.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductManagementComponent],
  exports: [ProductManagementComponent]
})
export class ProductModule { }
