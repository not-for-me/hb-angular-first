import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseTrackZoneComponent } from './mouse-track-zone.component';
import { By } from '@angular/platform-browser';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { AnotherLoggerService } from '../another-logger.service';
import { LogLevel } from '../log-level.enum';
import { LOG_LEVEL_TOKEN } from '../app.tokens';

describe('MouseTrackZoneComponent', () => {
  let component: MouseTrackZoneComponent;
  let fixture: ComponentFixture<MouseTrackZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MouseTrackZoneComponent],
      providers: [MySpecialLoggerService, AnotherLoggerService, { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseTrackZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('마우스 클릭할 때마다 로그가 적재되어야 한다.', () => {
    expect(component).toBeTruthy();

    const trackZone = fixture.debugElement.query(By.css('.track-zone'));
    trackZone.triggerEventHandler("click", { clientX: 1, clientY: 1 });
    expect((<MySpecialLoggerService>component.logger).logs.length).toEqual(1);

    trackZone.triggerEventHandler("click", { clientX: 100, clientY: 10 });
    trackZone.triggerEventHandler("click", { clientX: 200, clientY: 150 });
    expect((<MySpecialLoggerService>component.logger).logs.length).toEqual(3);
  });
});
