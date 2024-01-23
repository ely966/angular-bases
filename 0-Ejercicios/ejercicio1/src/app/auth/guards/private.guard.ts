import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class privateGuard implements CanActivate, CanMatch {
  loggin: boolean = false;

  constructor(private authService: AuthService, private route: Router) {}

  canMatch(route: Route, segments: UrlSegment[]): boolean {
    //recogemos si el usuario esta
    this.getUserLocalStorage();
    console.log(this.loggin);
    if (!this.loggin) {
      this.route.navigateByUrl('/auth/login');
      return false;
    }
    return true;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //recogemos si el usuario esta
    this.getUserLocalStorage();
    //console.log(this.loggin);
    if (!this.loggin) {
      this.route.navigateByUrl('/auth/login');
      return false;
    }
    return true;
  }

  // canMatch(
  //   route: Route,
  //   segments: UrlSegment[]
  // ):
  //   | boolean
  //   | UrlTree
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree> {
  //   throw new Error('Method not implemented.');
  // }

  getUserLocalStorage(): void {
    const usuarioLog = this.authService.getLocalStorage();
    //console.log(usuarioLog);
    if (usuarioLog === null) {
      this.loggin = false;
    } else {
      this.loggin = true;
    }
  }
}
