import { InjectionToken } from '@angular/core';
import { LogLevel } from './log-level.enum';
export const LOG_LEVEL_TOKEN = new InjectionToken<LogLevel>('logLevel');