import { Injectable, EventEmitter } from '@angular/core';
import { CheckItem } from './check-item';

@Injectable()
export class CheckListDataService {
  private checkList: CheckItem[] = [];
  changedCntState: EventEmitter<any> = new EventEmitter<any>(); 

  constructor() { }

  initList(totalCnt) {
    for (let i = 0; i < totalCnt; i++) {
      const checkItem = this.getNewCheckItem(i+1);
      this.checkList.push(checkItem);
    }
    return this.checkList;
  }

  changeTotalCntByOp(op: string) {
    if (op === '+') {
      const totalCnt = this.checkList.length
      const newItem = this.getNewCheckItem(totalCnt + 1);
      this.checkList.push(newItem);
    } else if (op === '-') {
      this.checkList.pop();
    }
    this.changedCntState.emit({}); 
  }

  checkItem(checkItem: CheckItem) {
    this.checkList[checkItem.idx-1] = checkItem;
    this.changedCntState.emit({}); 
  }

  unCheckItem(idx: number) {
    this.checkList[idx-1].isChecked = false;
    this.changedCntState.emit({}); 
  }

  getCheckedItemRatioText() {
    const curCnt = this.checkList.filter(i => i.isChecked).length;
    const totalCnt = this.checkList.length;
    const roundedRatio = Math.round((curCnt / totalCnt) * 100);
    return `${roundedRatio}%`;
  }

  private getNewCheckItem(idx: number) {
    return { idx: idx, content: this.getCheckListMsg(idx), isChecked: false };
  }

  private getCheckListMsg(idx: number): string {
    return `check list ${idx}`;
  }
}
