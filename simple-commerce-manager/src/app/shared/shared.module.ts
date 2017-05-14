import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoCounterService } from './no-counter.service';
import { DataStoreService } from './data-store.service';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { SpinnerService } from './loading-spinner/spinner.service';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';

@NgModule({
    imports: [CommonModule],
    providers: [NoCounterService, DataStoreService, SpinnerService, CanDeactivateGuardService],
    declarations: [LoadingSpinnerComponent],
    exports: [LoadingSpinnerComponent]
})
export class SharedModule { }
