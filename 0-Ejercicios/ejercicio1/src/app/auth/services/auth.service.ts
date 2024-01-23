import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuarioLogeado: User | null = null;

  constructor(private router: Router) {}

  //Cuando alguien se logea añadiremos al informacion en el localStorage
  //recogemos al informacion del login
  login(usuario: User) {
    this.saveLocalHost(usuario);
    this.router.navigateByUrl('posts'); //redirige al post
  }

  //guardar en el localHost
  saveLocalHost(usuario: User) {
    localStorage.setItem('user', JSON.stringify(usuario)); //lo convertimso en string para guardarlo en el localstorage
  }

  //extraer del localStorage

  getLocalStorage(): User | null {
    //Si la variable user del local storage esta vacio
    if (localStorage.getItem('user') === null) return null;

    //LocalStorage devuelve null o string, yo estopy diciendole que lo trate si o si como un string
    const user = JSON.parse(localStorage.getItem('user') as string);
    //si no esta vacio
    //console.log(user);

    return user;
  }

  //borrar localStorage
  deleteLocalStorage(): void {
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }

  logOut(): void {
    //primero borra el local
    this.deleteLocalStorage();
    this.router.navigateByUrl('/home');
  }
}
