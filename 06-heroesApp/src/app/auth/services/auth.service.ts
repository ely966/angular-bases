import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { enviroments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //localhost:3000/users/
  private baseUrl = enviroments.baseUrl;
  private user?: User;
  private users: User[] = [];
  //localhost:3000/users/
  constructor(private httpClient: HttpClient) {}

  get currentUser(): User | undefined {
    if (!this.users[0]) return undefined;

    //return { ...this.user };//mandar una copia y no mandar nuetsro user orginiar fuera
    // return structuredClone(this.user); //sino tiene objetos anelados
    return structuredClone(this.users[0]);
  }

  //no me funcionaba el localhost/users/1. solo lo pillaba asi recogiendolo como array
  login(email: string, password: string): Observable<User[]> {
    //http.post('login', {email, password})
    //localhost:3000/users/?id=1
    //return this.httpClient.get<User>(`${this.baseUrl}/users/?id=1`)
    return this.httpClient.get<User[]>(`${this.baseUrl}/users/`).pipe(
      tap((user) => (this.users = user)),
      tap((user) => localStorage.setItem('token', 'asdas.adsasd.adavgdfg'))
    );
  }
  login2(email: string, password: string): Observable<User> {
    //http.post('login', {email, password})
    //localhost:3000/users/?id=1
    //return this.httpClient.get<User>(`${this.baseUrl}/users/?id=1`)
    return this.httpClient.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => ((this.user = user), console.log(user))),
      //tap((user) => localStorage.setItem('token', user.id.toString())),
      tap((user) => localStorage.setItem('token', user.id.toString()))
    );
  }

  //comprobar el token
  checkAuthentication(): Observable<boolean> {
    //if (!localStorage.getItem('token')) return of(false);
    if (!localStorage.getItem('token')) return of(false);
    const token = localStorage.getItem('token');

    return this.httpClient.get<User[]>(`${this.baseUrl}/users/`).pipe(
      tap((user) => (this.users = user)),
      map((user) => !!this.users), //|user esta diciendo que esta vacio, es false, pero claro no peude ser verdad por que no esta vacio. si negamos doble, estamso negando la negaciond e que hay hay. es true
      catchError((err) => of(false))
    );
  }

  logOut() {
    this.user = undefined;
    this.users = [];

    localStorage.clear();
  }
}
