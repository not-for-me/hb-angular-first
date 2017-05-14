import { NgModule } from '@angular/core'; 
import { NoCounterService } from './no-counter.service'; 
import { DataStoreService } from './data-store.service'; 
 
@NgModule({ providers: [ NoCounterService, DataStoreService ] }) 
export class SharedModule { } 