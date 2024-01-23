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
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class PublicGuard implements CanMatch, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  //guard se encarga de bloquear al pantallka

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.checkAuthentication().pipe(
      tap((isAuthenticared) => console.log('Authenticated:', isAuthenticared)),
      tap((isAuthenticated) => {
        if (isAuthenticated) this.router.navigate(['./']);
      }),
      map((isAuthenticated) => !isAuthenticated)
    );
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {
    // console.log('can match');
    // console.log({ route, segments });
    //throw new Error('Method not implemented.');
    //return true; //si es false te manda al pantalla 404 porque es como qu sesq ruta no exite
    return this.checkAuthStatus();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    // console.log('Can Activate');
    // console.log({ route, state });

    // // throw new Error('Method not implemented.');
    // return true;
    return this.checkAuthStatus();
  }
}
