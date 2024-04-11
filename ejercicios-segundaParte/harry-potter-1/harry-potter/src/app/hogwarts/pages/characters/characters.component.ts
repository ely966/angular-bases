import { Component, OnInit, inject } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { ApiHogwartsService } from '../../services/api-hogwarts.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements OnInit {
  /*Title pag*/
  titleCharacters: string = 'CHARACTERS';
  /*Characters*/
  characters: Character[] = [];
  charactersImagenAdd: Character[] = [];
  /*Categorias para la cabecera de la tabla de personajes*/
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
  /*Cantidad total de poersonajes*/
  characterLength: number = 0;

  ngOnInit(): void {
    this.getCharacters();
  }
  /*Inject*/
  private apiHogwartsService1 = inject(ApiHogwartsService);

  /*Obtener los characters*/

  getCharacters() {
    this.apiHogwartsService1.getCharacter().subscribe({
      next: (characterReceiver) => {
        this.characters = characterReceiver;
      },
    });
    // this.modifyImage(this.characters);

    // this.characterLength = this.characters.length;
  }

  modifyImage(characterss: Character[]) {
    characterss.forEach((character) => {
      const characterImage = character.image;
      character.image = "<img src='" + characterImage + "'>";
      this.charactersImagenAdd.push(character);
      console.log(this.charactersImagenAdd);
    });
  }
}
