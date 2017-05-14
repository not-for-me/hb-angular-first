import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { SpinnerService } from './shared/loading-spinner/spinner.service';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';


@Component({
  selector: 'scm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(toastr: ToastsManager,
              vRef: ViewContainerRef,
              router: Router,
              spinner: SpinnerService) {
    toastr.setRootViewContainerRef(vRef);
    router.events.subscribe(e => this.handleRouteEvent(spinner, e)); 
 }

  handleRouteEvent(spinner: SpinnerService, e: RouterEvent): void {
    if ( e instanceof NavigationStart ) spinner.start();

    const isNavigationEnd = e instanceof NavigationEnd ||
      e instanceof NavigationCancel || e instanceof NavigationError;

    if ( isNavigationEnd ) spinner.stop();
  }

}
