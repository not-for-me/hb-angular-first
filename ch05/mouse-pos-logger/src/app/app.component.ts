import { Component } from '@angular/core';
import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';


@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mpl works!';

  constructor(private logger: MySpecialLoggerService) { }

  printDebugLog() {
    this.logger.debug("test depenency injector tree!");
  }
}

