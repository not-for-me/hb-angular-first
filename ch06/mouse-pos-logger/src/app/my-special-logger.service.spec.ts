import { TestBed, inject } from '@angular/core/testing';

import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum'
import { LOG_LEVEL_TOKEN } from './app.tokens';

describe('MySpecialLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySpecialLoggerService, { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO }]
    });
  });

  it('should ...', inject([MySpecialLoggerService], (service: MySpecialLoggerService) => {
    expect(service).toBeTruthy();
  }));

  it('최초 로그 레벨은 LOG_LEVEL_TOKEN에서 선언한 값이어야 한다.', inject([MySpecialLoggerService], (service: MySpecialLoggerService) => {
    expect(service).toBeTruthy();
    expect(service.logLevel).toEqual(LogLevel.INFO);
  }));

  it('로그 레벨에 따라 저장되는 로그의 수가 정확하게 일치해야 한다.', inject([MySpecialLoggerService], (service: MySpecialLoggerService) => {
    service.info("test 1");
    service.info("test 2");
    expect(service.logs.length).toEqual(2);

    service.debug("can't be printed...");;
    expect(service.logs.length).toEqual(2);

    service.logLevel = LogLevel.ERROR;
    service.debug("can't be printed...");;
    service.info("can't be printed...");;
    service.warn("can't be printed...");;
    expect(service.logs.length).toEqual(2);

    service.error("test 3");
    expect(service.logs.length).toEqual(3);
  }));
});
