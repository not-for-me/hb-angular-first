import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  userName = '';
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if (this.valid) return;
      alert('이름을 입력해 주세요');
    };

    setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  onKeyUp(name) {
    this.valid = name.length > 0;
  }

  setName(name) {
    this.userName = name;
  }
}
