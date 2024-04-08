import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  /*Headers/cabeceras table. Send from father*/
  @Input() categoryColumn: string[] = [''];
  @Input() dataSource: any = [];

  //['created', 'state', 'number', 'title'];
  //Recibir los personajes del componente personaje
  characters: Character[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor() {}

  /*Obtener los characters*/
}
