import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SpinnerService {
  private _asyncCounter: number = 0;
  private _loading$: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this._loading$.emit(false);
  }

  getLoading$() {
    return this._loading$;
  }

  start() {
    console.log('request loading spinner start');
    if(this._asyncCounter === 0) this._loading$.emit(true);
    this._asyncCounter++;
  }

  stop() {
    console.log('request loading spinner stop');
    this._asyncCounter--;
    if(this._asyncCounter === 0) this._loading$.emit(false);
  }
}
