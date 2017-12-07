import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CAT_LIST_PAGE_SIZE } from "../category.tokens";
import { Category, Categories } from "../category.model";
import { DataStoreService } from "../../shared/data-store.service";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryListResolverService implements Resolve<any> {

  constructor(private database: DataStoreService,
              @Inject(CAT_LIST_PAGE_SIZE) private pageSize: number) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.database.count('category')
      .switchMap(cnt => this.database.findList$ByPage<Category>('category', 1, this.pageSize, cnt))
      .take(1)
      .map(actions => actions.map(action => action.payload.val()))
      .do((list: Categories) => list.sort((p1, p2) => p2.no - p1.no))
  }
}
