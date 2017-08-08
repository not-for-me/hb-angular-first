import { Component, OnInit } from '@angular/core';
import { CheckListDataService } from './check-list-data.service';
import { CheckItem } from './check-item';

@Component({
  selector: 'cc-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  INIT_TOTAL_CNT: number = 4;
  checkList: CheckItem[] = [];
  curCheckedItem: CheckItem;

  constructor(public checkListDataService: CheckListDataService) {
    this.checkList = this.checkListDataService.initList(this.INIT_TOTAL_CNT);
  }

  ngOnInit() { }

  onChangeCnt(op: string) {
    this.checkListDataService.changeTotalCntByOp(op);
  }

  onChecked(isChecked, checkedItem: CheckItem) {
    checkedItem.isChecked = isChecked
    this.curCheckedItem = JSON.parse(JSON.stringify(checkedItem));
    this.checkListDataService.checkItem(checkedItem);
  }

  unCheckedItem(idx) {
    this.checkListDataService.unCheckItem(idx);
  }
}
