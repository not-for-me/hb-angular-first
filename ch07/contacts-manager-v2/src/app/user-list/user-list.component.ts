import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
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
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.fetchAllUserSummary().subscribe(res => this.handleUserSummaryResponse(res));
  }

  fetchAllUserSummary() {
    return this.userListService.findAllUserSummary();
  }


  selectUser(no: number) {
    this.selectedUserNo = no;
  }

  handleUserSummaryResponse(response) {
    console.log(JSON.stringify(response))
    this.userSummaries = response
  }

  getUserDetailDialog(no: number) {
    const dialogRef = this.dialog.open(UserDetailComponent, { width: '20%' });
    dialogRef.componentInstance.isAddMode = false;
    dialogRef.componentInstance.userNo = no;
    dialogRef.afterClosed()
      .pipe(
        switchMap(() => this.fetchAllUserSummary())
      )
      .subscribe(res => this.handleUserSummaryResponse(res));
  }

  removeUser() {
    console.log(this.selectedUserNo);
    this.userDetailService.removeUser(this.selectedUserNo)
      .pipe(
        switchMap(() => this.fetchAllUserSummary())
      )
      .subscribe(res => this.handleUserSummaryResponse(res));
  }

  addUser() {
    const dialogRef = this.dialog.open(UserDetailComponent, { width: '20%' });
    dialogRef.componentInstance.isAddMode = true;
    dialogRef.componentInstance.userNo = 0;
    dialogRef.afterClosed()
      .pipe(
        switchMap(() => this.fetchAllUserSummary())
      )
      .subscribe(res => this.handleUserSummaryResponse(res));
  }
}
