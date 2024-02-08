import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecogidaDatosService {
  private hobbies: string[] = [
    'Escuchar música',
    'Hacer Deporte',
    'VideoJuegos',
    'Viajar',
    'Leer',
  ];

  constructor() {}

  //
  getHobbies(): Observable<string[]> {
    return of([...this.hobbies]);
  }
}
