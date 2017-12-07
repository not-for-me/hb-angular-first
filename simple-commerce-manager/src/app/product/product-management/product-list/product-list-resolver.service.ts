import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Product, Products } from "../../product.model";
import { PROD_LIST_PAGE_SIZE } from "../../product.tokens";
import { DataStoreService } from "../../../shared/data-store.service";

@Injectable()
export class ProductListResolverService implements Resolve<any> {

  constructor(private database: DataStoreService,
              @Inject(PROD_LIST_PAGE_SIZE) private pageSize: number) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.database.count('product')
      .switchMap(cnt => this.database.findList$ByPage<Product>('product', 1, this.pageSize, cnt))
      .take(1)
      .map(actions => actions.map(action => action.payload.val()))
      .do((list: Products) => list.sort((p1, p2) => p2.no - p1.no));
  }
}
