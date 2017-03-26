import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementComponent } from './category-management/category-management.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryManagementComponent],
  exports: [CategoryManagementComponent]
})
export class CategoryModule { }
