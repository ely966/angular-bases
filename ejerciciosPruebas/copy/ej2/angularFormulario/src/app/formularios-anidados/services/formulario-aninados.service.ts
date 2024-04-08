import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormularioAninadosService {
  hobbies: string[] = [
    'Escuchar_Musica',
    'Leer',
    'hacer_deporte',
    'Bailar',
    'Videojuegos',
  ];
  constructor() {}

  // get returnHobbies(): string[] {
  //   return this.hobbies;
  // }
  //OBSERVABLE
  get returnHobbies(): Observable<string[]> {
    return of([...this.hobbies]);
  }
}
