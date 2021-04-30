import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './user.model';
import { UserDetailService } from './user-detail.service';

@Component({
  selector: 'cm2-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    isAddMode: boolean = false;
    userNo: number;
    user: User = new User();

    constructor(
        private userDetailService: UserDetailService,
        private dialogRef: MatDialogRef<UserDetailComponent>,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        if (this.userNo !== 0) {
            this.getUser(this.userNo);
        }
    }

    getUser(no: number) {
        this.userDetailService.findUser(no).subscribe(user => this.user = user);
    }

    modifyUser() {
        if(this.isAddMode) {
            this.userDetailService.addUser(this.user).subscribe(res => {
            this.snackBar.open('사용자 정보 등록', '완료', {
                duration: 2000,
            });
            this.dialogRef.close();
        });
            return;
        }

        this.userDetailService.modifyUser(this.user).subscribe(res => {
            this.snackBar.open('사용자 정보 수정', '완료', {
                duration: 2000,
            });
            this.dialogRef.close();
        });
    }

    closeDialog() {
        this.dialogRef.close();
    }
}
