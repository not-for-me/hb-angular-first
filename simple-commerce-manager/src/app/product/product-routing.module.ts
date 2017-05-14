import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductManagementComponent } from "./product-management/product-management.component";
import { ProductDetailResolverService } from "./product-detail/product-detail-resolver.service";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListResolverService } from "./product-management/product-list/product-list-resolver.service";

const routes: Routes = [
  {
    path: 'product-list', children: [
    {
      path: '',
      pathMatch: 'full',
      resolve: {list: ProductListResolverService},
      component: ProductManagementComponent
    },
    {
      path: 'product/:no',
      resolve: {detail: ProductDetailResolverService},
      component: ProductDetailComponent
    }
  ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ProductDetailResolverService,
    ProductListResolverService,
  ]
})
export class ProductRoutingModule {
}
