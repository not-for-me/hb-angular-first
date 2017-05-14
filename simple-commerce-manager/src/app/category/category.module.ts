import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CategoryRoutingModule } from "./category-routing.module";
import { CategoryItemComponent } from './category-management/category-item/category-item.component';
import { CAT_LIST_PAGE_SIZE } from './category.tokens';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoryRoutingModule,
    NgbPaginationModule
  ],
  declarations: [CategoryManagementComponent, CategoryDetailComponent, CategoryItemComponent],
  providers: [{ provide: CAT_LIST_PAGE_SIZE, useValue: 3 }]
})
export class CategoryModule { }
