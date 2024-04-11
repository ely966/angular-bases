import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from '../interfaces/book.interface';
import { Character } from '../interfaces/character.interface';
import { House } from '../interfaces/house.interface';
import { Spell } from '../interfaces/spell.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiHogwartsService {
  //https://github.com/fedeperin/potterapi?tab=readme-ov-file
  private url: string = 'https://potterapi-fedeperin.vercel.app/';
  private urlCharacterEs: string =
    'https://potterapi-fedeperin.vercel.app/es/characters';
  private urlBookEs: string = 'https://potterapi-fedeperin.vercel.app/es/books';
  private urlSpellEs: string =
    'https://potterapi-fedeperin.vercel.app/es/spells';
  private urlHouseEs: string =
    'https://potterapi-fedeperin.vercel.app/es/houses';
  constructor(private httpClient: HttpClient) {}

  /*Obtener los personajes*/

  getCharacter(): Observable<Character[]> {
    return this.httpClient
      .get<Character[]>(this.urlCharacterEs)
      .pipe(tap((characterReceiver) => {}));
  } /*Return the houses*/
  getHouses(): Observable<House[]> {
    return this.httpClient
      .get<House[]>(this.urlHouseEs)
      .pipe(tap((housesReceiver) => {}));
  }
  /*Return the books*/
  getBooks(): Observable<Book[]> {
    return this.httpClient
      .get<Book[]>(this.urlBookEs)
      .pipe(tap((booksReceiver) => {}));
  }

  /*Return the spells*/
  getSpells(): Observable<Spell[]> {
    return this.httpClient
      .get<Spell[]>(this.urlSpellEs)
      .pipe(tap((spellsReceiver) => {}));
  }
}
