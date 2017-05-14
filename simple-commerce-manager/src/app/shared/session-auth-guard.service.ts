import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ToastsManager } from "ng2-toastr";
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class SessionAuthGuardService {
  constructor(
    private router: Router,
    private toastr: ToastsManager,
    private afAuth: AngularFireAuth) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.afAuth.authState
      .take(1)
      .map(user => !!user)
      .do(authenticated => {
        if (!authenticated) {
          this.toastr.error('로그인 해주세요', '[오류]');
          this.router.navigate(['/']);
        }
      });
  }
}
