import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiHogwartsService {
  //https://github.com/fedeperin/potterapi?tab=readme-ov-file
  url: string = 'https://potterapi-fedeperin.vercel.app/';
  urlEs: string = 'https://potterapi-fedeperin.vercel.app/es/characters';

  constructor(private httpClient: HttpClient) {}

  /*Obtener los personajes*/

  getCharacter(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.urlEs).pipe(
      tap((characterReceiver) => {
        console.log(characterReceiver);
      })
    );
  } /*Return the houses*/

  /*Return the books*/

  /*Return the spells*/
}
