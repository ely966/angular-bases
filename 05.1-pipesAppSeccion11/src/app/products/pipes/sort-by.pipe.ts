import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  //value: unknown, ...args: unknown[]): unknown args: unknown[]) lo que recibimos
  //tiene que ser estrictor porque sera ordenar por alguna key
  transform(heroes: Hero[], sortBy: keyof Hero | null): Hero[] {
    switch (sortBy) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'canFly':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'color':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
      default:
        return heroes;
    }
  }
}
