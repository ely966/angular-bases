import { Component } from '@angular/core';
import { Personaje } from './interfaces/personaje.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css',
})
export class PersonajesComponent {
  public listaPersonajes: Personaje[] = [
    {
      nombre: 'zongli',
      arma: 'lanza',
      power: 'tierra',
      nivel: 99,
    },
    {
      nombre: 'venti',
      arma: 'arco',
      power: 'viento',
      nivel: 80,
    },
    {
      nombre: 'xiao',
      arma: 'lanza',
      power: 'viento',
      nivel: 70,
    },
  ];
}
