import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //primero clono la request recibida
    let clonedRequest = req;
    //clonamos la petición. podemos modificarla, como por ejemplo añadirle setHeaders
    clonedRequest = req.clone({
      setHeaders: {
        'x-api-key':
          'live_pOruIRYRxfLoCdWyeIvVNhGbVaneyQfq51zNTodskQcxFj3ZHLPxk8DRSYWCg346',
        'Content-Type': 'application/json',
      },
    });
    return next.handle(clonedRequest);
  }
}
