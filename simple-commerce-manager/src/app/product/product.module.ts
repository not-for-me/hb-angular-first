import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-management/product-list/product-list.component';
import { PROD_LIST_PAGE_SIZE } from "./product.tokens";
import { ProductBulkUpdaterService } from "./product-management/product-bulk-updater.service";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ProductRoutingModule } from "./product-routing.module";
import { CheckedProductSetService } from "./product-management/checked-product-set.service";
import { ButtonGroupComponent } from './product-management/button-group/button-group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    ProductRoutingModule
  ],
  declarations: [ProductManagementComponent, ProductDetailComponent, ProductListComponent, ButtonGroupComponent],
  providers: [
    CheckedProductSetService,
    ProductBulkUpdaterService,
    {provide: PROD_LIST_PAGE_SIZE, useValue: 6},
  ]
})
export class ProductModule { }
