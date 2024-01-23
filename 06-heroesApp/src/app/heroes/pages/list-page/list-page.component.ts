import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css',
})
export class ListPageComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroService: HeroesService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe({
      next: (heroes) => {
        this.heroes = heroes;
      },
    });
  }
}
