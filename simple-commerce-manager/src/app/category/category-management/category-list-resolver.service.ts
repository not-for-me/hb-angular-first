import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CAT_LIST_PAGE_SIZE } from "../category.tokens";
import { Categories } from "../category.model";
import { DataStoreService } from "../../shared/data-store.service";

@Injectable()
export class CategoryListResolverService implements Resolve<any> {

  constructor(private database: DataStoreService,
              @Inject(CAT_LIST_PAGE_SIZE) private pageSize: number) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.database.count('category')
      .switchMap(cnt => this.database.findList$ByPage('category', 1, this.pageSize, cnt))
      .do((list: Categories) => list.sort((p1, p2) => p2.no - p1.no))
      .take(1);
  }
}
