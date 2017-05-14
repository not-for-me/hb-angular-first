import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Products } from "../../product.model";
import { PROD_LIST_PAGE_SIZE } from "../../product.tokens";
import { DataStoreService } from "../../../shared/data-store.service";

@Injectable()
export class ProductListResolverService implements Resolve<any> {

  constructor(private database: DataStoreService,
              @Inject(PROD_LIST_PAGE_SIZE) private pageSize: number) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.database.count('product')
      .switchMap(cnt => this.database.findList$ByPage('product', 1, this.pageSize, cnt))
      .do((list: Products) => list.sort((p1, p2) => p2.no - p1.no))
      .take(1);
  }
}
