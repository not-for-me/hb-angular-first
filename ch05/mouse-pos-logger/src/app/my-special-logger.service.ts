import { Injectable, Inject } from '@angular/core';
import { LogLevel } from './log-level.enum';
import * as format from 'date-fns/format';
import { LOG_LEVEL_TOKEN } from './app.tokens';
import { LoggerService } from './logger-service';

@Injectable()
export class MySpecialLoggerService extends LoggerService {
  logs: string[] = [];
  private readonly MAX_HISTORY_CNT: number = 100;
  private readonly TIME_FORMATTER: string = "YYYY-MM-DD HH:mm:ss.SSS";

  constructor( @Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) {
    super(logLevel);
  }

  log(logLevel: LogLevel, msg: string) {
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
      this.keepLogHistory(logMsg);
    }
  }

  private keepLogHistory(log: string) {
    if (this.logs.length === this.MAX_HISTORY_CNT) {
      this.logs.shift();
    }
    this.logs.push(log);
  }

  private getFormattedLogMsg(logLevel: LogLevel, msg: string) {
    const curTimestamp = format(new Date(), this.TIME_FORMATTER);
    return `[${LogLevel[logLevel]}] ${curTimestamp} - ${msg}`;
  }
}
