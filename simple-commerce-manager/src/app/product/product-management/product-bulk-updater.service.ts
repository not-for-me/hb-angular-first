import { Injectable } from '@angular/core';
import { CheckedProductSetService } from "./checked-product-set.service";
import { Product, ProdStatus } from "../product.model";
import { DataStoreService } from "../../shared/data-store.service";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

export declare type UpdateResult = [boolean, number];

@Injectable()
export class ProductBulkUpdaterService {

  constructor(private database: DataStoreService, private prodSet: CheckedProductSetService) { }

  updateProductsToSell() {
    return this.updateStatus(ProdStatus.ON_SALE);
  }

  updateProductsToStop() {
    return this.updateStatus(ProdStatus.NOT_FOR_SALE);
  }

  private updateStatus(status: ProdStatus) {
    const modifyProductFn = (prod: Product) => {
      prod.status = status;
      return prod;
    };

    return this._bulkUpdate(modifyProductFn);
  }

  private _bulkUpdate(updateFn: (Product) => Product) {
    const update$ = this.prodSet.nos$()
      .mergeMap(no => this.database.findObject$<Product>('product', no).snapshotChanges().take(1))
      .map(action  => {
        if(action.payload.val()) return action.payload.val();
        throw new Error('failed to fetch value');
      })
      .do(updateFn)
      .mergeMap(prod =>
        this.database.update('product', prod)
          .then(() => [true, prod.no])
          .catch((e) => [false, prod.no])
      );
    return this.handleBulkUpdate$(update$);
  }

  private handleBulkUpdate$(update$: Observable<any>) {
    return update$.reduce((acc, r: UpdateResult) => {
      console.log(r[0]);
      if ( r[0] ) {
        acc.success.push(r[1])
      } else {
        acc.fail.push(r[1]);
      }
      return acc;
    }, {success: [], fail: []})
      .do(result => {
        if ( result.fail.length > 0 ) {
          throw new Error(`${result.fail.join(', ')}`);
        }
      })
      .map(result => result.success);
  }
}
