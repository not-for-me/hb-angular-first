import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Product, ProdStatus } from "../product.model";
import { DataStoreService } from "../../shared/data-store.service";
import * as firebase from 'firebase/app'

@Injectable()
export class ProductDetailResolverService implements Resolve<Product> {

  constructor(private database: DataStoreService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const objectSnapshot$ = this.database.findObject$<Product>('product', route.params['no'])
      .snapshotChanges().take(1).map(action => action.payload.val());


    const usedCat$ = this.database.findList$ByQuery('category', 'isUse', true)
      .snapshotChanges().take(1).map(actions => actions.map(action => action.payload.val()));

    const action = route.queryParams['action'];
    if (action === 'create') {
      return usedCat$.map(cats => [new Product(0, ProdStatus.WAIT_FOR_SALE), cats]);
    }

    return Observable.zip(objectSnapshot$, usedCat$).map(data => {
      if (data[0] === null) {
        this.router.navigate(['/product-list']);
        return null;
      }

      return data;
    })
  }
}
