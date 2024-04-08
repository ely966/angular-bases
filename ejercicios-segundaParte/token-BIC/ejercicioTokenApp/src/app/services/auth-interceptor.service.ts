import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  //Recoger que cada peticion, lo recoga este interceptor y le añadiremos el header
  //https://apyhub.com/utility/finance-validator-bic https://www.youtube.com/watch?v=VDfvkWrjzXE
  //Recoge el valor y dice que continue al siguiente paso. next: HttpHandler
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //primero clono la request recibida
    let clonedRequest = req;

    console.log('Interceptor');
    //Si tengo el token guardado en mi localStorage correctamente
    // if (localStorage.getItem('token')) {
    //clonamos la petición. podemos modificarla, como por ejemplo añadirle setHeaders
    clonedRequest = req.clone({
      setHeaders: {
        'apy-token':
          'APY0vyjvp6PQbBPavQsEMLdvNRKP22BwBwnlGvtoU3xwCrUD1ZEWUmIRRFsGkj7pAA4XrnVA1Od',
        'Content-Type': 'application/json',
      },
    });
    // }

    return next.handle(clonedRequest);
    // throw new Error('Method not implemented.');
  }
}
