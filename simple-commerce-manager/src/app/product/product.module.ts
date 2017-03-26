import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductManagementComponent } from './product-management/product-management.component';

@NgModule({
  imports: [CommonModule, ProductRoutingModule],
  declarations: [ProductManagementComponent]
})
export class ProductModule { }
