import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  //recoger loq ue le mandamos del otro [hero]. mandandole a este componente la informacion del heroe
  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    if (!this.hero)
      throw new Error('No hay heroes. hero property sis required');
  }
}
