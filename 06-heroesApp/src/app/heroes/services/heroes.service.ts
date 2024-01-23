import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { enviroments } from '../../../environments/environments';
import { Hero } from '../interfaces/hero.interface';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseUrl: string = enviroments.baseUrl; //loo hemos creado la url localhost en este fichero

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    //si se equivoca devolvera un undefined
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`).pipe(
      catchError((error) => of(undefined)) //Si da un error voy a devolver un observable que da undefined
    );
  }

  //  CRUD

  addHero(hero: Hero): Observable<Hero> {
    // this.http.post<Hero>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
    //donde llegar, y loq ue va a mandar
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error('Hero id is required');
    //recibimos algunas propiedades de hero y solo queremos actiualizar algunos registros del objeto
    //seria patch o put
    //pat actualizar parte del registro es patch
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHeroById(id: string): Observable<boolean> {
    return this.http.delete<Hero>(`${this.baseUrl}/heroes/${id}`).pipe(
      //no existe mandaremos false cuadno no se borra
      catchError((err) => of(false)), //da igual si no cae en error, hacemos que de un true con map
      map((resp) => true)
    );
  }
}
