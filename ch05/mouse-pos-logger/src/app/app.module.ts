import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MouseTrackZoneComponent } from './mouse-track-zone/mouse-track-zone.component';

import { MySpecialLoggerService } from './my-special-logger.service';

import { LogLevel } from './log-level.enum';


@NgModule({
  declarations: [
    AppComponent,
    MouseTrackZoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MySpecialLoggerService, { provide: 'logLevel', useValue: LogLevel.INFO }],
  bootstrap: [AppComponent]
})
export class AppModule { }
