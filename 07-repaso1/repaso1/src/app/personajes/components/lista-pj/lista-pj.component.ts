import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-lista-pj',
  templateUrl: './lista-pj.component.html',
  styleUrl: './lista-pj.component.css',
})
export class ListaPjComponent {
  //traer los personajes del pjs
  @Input() listaPersonajes: Personaje[] = [];
  public listita: string = 'Lista de personajes';
}
