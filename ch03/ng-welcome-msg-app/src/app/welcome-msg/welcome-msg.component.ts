import { Component, AfterViewInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  welcomeMsg = '';
  userName = '';
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  constructor(public i18nSupporter: I18nSupportService, private snackbar: MatSnackBar) { }

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if (this.valid) return;
      this.snackbar.open('이름을 입력해 주세요', '확인', { duration: 3000 });
    };

    setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  onChange() {
    this.valid = this.userName.length > 0;
  }

  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsg(this.userName);
  }
}
