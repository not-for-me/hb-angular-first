import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { User, UserDetailService, UserDetailComponent } from './user-detail';
import { UserListService } from './user-list.service';

@Component({
  selector: 'cm2-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userSummaries: any[];
  selectedUserNo: number = 0;

  constructor(
    private userListService: UserListService,
    private userDetailService: UserDetailService,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.fetchAllUserSummary().subscribe(res => this.userSummaries = res);
  }

  fetchAllUserSummary() {
    return this.userListService.findAllUserSummary();
  }


  selectUser(no: number) {
    this.selectedUserNo = no;
  }

  getUserDetailDialog(no: number) {
    const dialogRef = this.dialog.open(UserDetailComponent, { width: '20%' });
    dialogRef.componentInstance.isAddMode = false;
    dialogRef.componentInstance.userNo = no;
    dialogRef.afterClosed()
      .switchMap(() => this.fetchAllUserSummary())
      .subscribe(res => this.userSummaries = res);
  }

  removeUser() {
    console.log(this.selectedUserNo);
    this.userDetailService.removeUser(this.selectedUserNo)
      .switchMap(() => this.fetchAllUserSummary())
      .subscribe(res => this.userSummaries = res);
  }

  addUser() {
    const dialogRef = this.dialog.open(UserDetailComponent, { width: '20%' });
    dialogRef.componentInstance.isAddMode = true;
    dialogRef.componentInstance.userNo = 0;
    dialogRef.afterClosed()
      .switchMap(() => this.fetchAllUserSummary())
      .subscribe(res => this.userSummaries = res);
  }
}
