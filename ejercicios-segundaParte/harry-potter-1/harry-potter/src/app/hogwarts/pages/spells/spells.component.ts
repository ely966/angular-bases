import { Component, OnInit, inject } from '@angular/core';
import { Spell } from '../../interfaces/spell.interface';
import { ApiHogwartsService } from '../../services/api-hogwarts.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.css',
})
export class SpellsComponent implements OnInit {
  spellsLength: number = 0;
  /*Title of page*/
  titleSpells: string = 'SPELLS';
  /*Titles of table*/
  headersSpells: string[] = ['spell', 'use', 'index'];
  /*Data of table*/
  spells: Spell[] = [];
  /*Connection with service*/
  apiHogwartsService1 = inject(ApiHogwartsService);

  ngOnInit(): void {
    this.getSpells();
  }
  /*Receiver the spells*/

  getSpells() {
    this.apiHogwartsService1.getSpells().subscribe({
      next: (spellsReceiver) => {
        this.spells = spellsReceiver;
      },
    });
  }
}
