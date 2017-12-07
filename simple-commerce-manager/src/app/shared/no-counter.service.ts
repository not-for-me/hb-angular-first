import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'; 
import { ScmDomain } from './scm-shared-util';

@Injectable()
export class NoCounterService {

  constructor(private db: AngularFireDatabase) { }

  get(domain: ScmDomain): Observable<number> {
    return this._getNumber$(domain).snapshotChanges()
      .map(action => action.payload.val() || 0);
  }

  incAndGet(domain: ScmDomain): Observable<number> {
    const id$ = new EventEmitter<number>();

    const onComplete = (err, comitted, dataSnapshot) => {
      if (err) throw new Error(`failed to increase number`);

      if (comitted) {
        id$.emit(dataSnapshot.val());
        id$.complete();
      }
    };
    this.db.object(`/numbers/${domain}`).query.ref.transaction(num => (num || 0) + 1, onComplete);
    return id$;
  }

  private _getNumber$(domain: ScmDomain) {
    return this.db.object(`/numbers/${domain}`);
  }
}
