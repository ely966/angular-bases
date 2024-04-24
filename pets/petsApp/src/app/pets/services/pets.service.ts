import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Cat } from '../interfaces/cat.interface';

@Injectable({
  providedIn: 'root',
})
export class PetsService implements OnInit {
  private url: string = 'https://api.thecatapi.com/v1/breeds?';
  private urlLimit: string =
    'https://api.thecatapi.com/v1/breeds?limit=10&page=0';
  private urlID: string = 'https://api.thecatapi.com/v1/breeds/';
  /*COmo llamar a api*/
  /*Buscar iamgen*/
  // https://api.thecatapi.com/v1/images/0XYvRd7oD
  /*POr id*/
  /*https://api.thecatapi.com/v1/breeds/{id}}*/

  /*==*/
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    // this.getCat();
  }

  /*Obtenertodos los gatos*/
  getCat(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>(this.url).pipe(
      tap((result) => {
        console.log(result);
      })
    );
  }

  /*Obtenertodos los gatos*/
  getCatLimit(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>(this.urlLimit).pipe(
      tap((result) => {
        console.log(result);
      })
    );
  }

  /*Obtener un gato por id*/
  getCatByID(idCat: String): Observable<Cat> {
    return this.httpClient
      .get<Cat>(this.urlID + idCat)
      .pipe(tap((cat) => console.log(cat)));
  }
}
