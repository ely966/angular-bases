import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { HogwartsRoutingModule } from './hogwarts-routing.module';
import { BooksComponent } from './pages/books/books.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HousesComponent } from './pages/houses/houses.component';
import { SpellsComponent } from './pages/spells/spells.component';
@NgModule({
  declarations: [
    CharactersComponent,
    SpellsComponent,
    BooksComponent,
    HousesComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    HogwartsRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class HogwartsModule {}
