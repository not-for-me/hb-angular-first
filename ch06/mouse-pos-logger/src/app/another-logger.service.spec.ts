import { TestBed, inject } from '@angular/core/testing';

import { AnotherLoggerService } from './another-logger.service';
import { LogLevel } from './log-level.enum'
import { LOG_LEVEL_TOKEN } from './app.tokens';

describe('AnotherLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnotherLoggerService, { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO }]
    });
  });

  it('should ...', inject([AnotherLoggerService], (service: AnotherLoggerService) => {
    expect(service).toBeTruthy();
  }));

  it('최초 로그 레벨은 LOG_LEVEL_TOKEN에서 선언한 값이어야 한다.', inject([AnotherLoggerService], (service: AnotherLoggerService) => {
    expect(service).toBeTruthy();
    expect(service.logLevel).toEqual(LogLevel.INFO);
  }));

  it('level을 변경한 것이 정상적으로 반영되어야 한다.', inject([AnotherLoggerService], (service: AnotherLoggerService) => {
    service.logLevel = LogLevel.DEBUG;
    expect(service.logLevel).toEqual(LogLevel.DEBUG);
  }));

});
