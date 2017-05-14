import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NoCounterService } from './no-counter.service';
import { ScmDomain } from "./scm-shared-util";
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';

@Injectable()
export class DataStoreService {
  constructor(
    private db: AngularFireDatabase,
    private counter: NoCounterService) {
  }

  create(domain: ScmDomain, modelCreatorFn: (number) => any) {
    return this.counter.incAndGet(domain)
      .switchMap(no => this.findObject$(domain, no).set(modelCreatorFn(no)));
  }

  findObject$(domain: ScmDomain, no: number) {
    return this._findObject(domain, no, false);
  }

  findObjectSnapshot(domain: ScmDomain, no: number) {
    return this._findObject(domain, no, true).take(1);
  }

  findList$(domain: ScmDomain) {
    return this.db.list(`/${domain}`);
  }

  findList$ByQuery(domain: ScmDomain, queryKey: string, queryVal: any) {
    const option: FirebaseListFactoryOpts = { query: { orderByChild: queryKey, equalTo: queryVal } };
    return this._findListByOpt(domain, option).take(1);
  }

  findList$ByPage(domain: ScmDomain, pageNo, pageSize, totalCnt) {
    const offset = totalCnt - pageSize * (pageNo - 1);
    const option: FirebaseListFactoryOpts = {
      query: {
        orderByChild: 'no',
        endAt: offset,
        limitToLast: pageSize
      }
    };
    return this._findListByOpt(domain, option);
  }

  update(domain: ScmDomain, model: any) {
    return this.findObject$(domain, model.no).update(model);
  }

  count(domain: ScmDomain) {
    return this.counter.get(domain);
  }

  private _findObject(domain: ScmDomain, no: number, isSnapshot: boolean) {
    if (isSnapshot) {
      return this.db.object(`/${domain}/${no}`, { preserveSnapshot: true });
    }
    return this.db.object(`/${domain}/${no}`);
  }

  private _findListByOpt(domain: ScmDomain, option: FirebaseListFactoryOpts) {
    return this.db.list(`/${domain}`, option);
  }
}
