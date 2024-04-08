import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HousesComponent } from './pages/houses/houses.component';
import { SpellsComponent } from './pages/spells/spells.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    pathMatch: 'full',
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'spells',
    component: SpellsComponent,
  },
  {
    path: 'houses',
    component: HousesComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HogwartsRoutingModule {}
