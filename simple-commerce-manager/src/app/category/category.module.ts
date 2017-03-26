import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';

import { CategoryManagementComponent } from './category-management/category-management.component';

@NgModule({
  imports: [CommonModule, CategoryRoutingModule],
  declarations: [CategoryManagementComponent]
})
export class CategoryModule { }
