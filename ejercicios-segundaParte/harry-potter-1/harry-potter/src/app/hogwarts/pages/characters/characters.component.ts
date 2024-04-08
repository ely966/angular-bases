import { Component, OnInit, inject } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { ApiHogwartsService } from '../../services/api-hogwarts.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  /*Categoriaspara la cabecera de la tabla de personajes*/
  headersCharacters: string[] = [
    'fullName',
    'nickname',
    'hogwartsHouse',
    'interpretedBy',
    'children',
    'image',
    'birthdate',
    'index',
  ];
  constructor(private apiHogwartsService: ApiHogwartsService) {}
  ngOnInit(): void {
    this.getCharacters();
  }
  /*Inject*/
  private apiHogwartsService1 = inject(ApiHogwartsService);
  a = this.apiHogwartsService;

  /*Obtener los characters*/

  getCharacters() {
    this.apiHogwartsService1.getCharacter().subscribe({
      next: (characterReceiver) => {
        this.characters = characterReceiver;
        console.log(this.characters);
      },
    });
  }
}
