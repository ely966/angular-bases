import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  url = 'https://api.apyhub.com/validate/bic';
  //https://apyhub.com/utility/finance-validator-bic#endpoints
  constructor() {}
  //private httpCliente: HttpClient
  //Token generator.Recibidiio del formulario
  createToken(tokeRecibido: string) {
    console.log(tokeRecibido);
    const helper = new JwtHelperService();
    //const decodedToken = helper.decodeToken(tokeRecibido);
    //Guardar en el localStorage
    localStorage.setItem('token', tokeRecibido);
    console.log(localStorage.getItem('token'));
  }

  // createHeaders() {
  //   /*https://www.youtube.com/watch?v=VDfvkWrjzXE*/
  //   return {
  //     Headers: new HttpHeaders({
  //       Authorization: localStorage.getItem('token')!,
  //     }),
  //   };
  // }

  sendLogin() {}
}

// intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   const authRequest = request.clone({headers: request.headers.set('Authorization', `JWT ${this.authSession.token}`)});
//   return next.handle(authRequest).do((event: HttpEvent<any>) => {
//       if (event instanceof HttpResponse) {
//           // do stuff with response if you want
//       }
//   }, (err: any) => {
//       if (err instanceof HttpErrorResponse) {
//           if (err.status === 401 || err.status === 403) {
//               this.auth.logout();
//           }
//       }
//   });
// }

// https://stackoverflow.com/questions/48075688/how-to-decode-the-jwt-encoded-token-payload-on-client-side-in-angular
//  getDecodedAccessToken(token: string): any {
//     try {
//       return jwt_decode(token);
//     } catch(Error) {
//       return null;
//     }
//   }
//   const tokenInfo = this.getDecodedAccessToken(token); // decode token
// const expireDate = tokenInfo.exp; // get token expiration dateTime
// console.log(tokenInfo); // show decoded token object in console
