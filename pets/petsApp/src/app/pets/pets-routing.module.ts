import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCatComponent } from './pages/details-cat/details-cat.component';
import { ShowPetsComponent } from './pages/show-pets/show-pets.component';

const routes: Routes = [
  {
    path: '',
    component: ShowPetsComponent,
    pathMatch: 'full',
  },
  {
    path: 'show',
    component: ShowPetsComponent,
  },
  {
    //':id',
    path: 'cat/:id',
    component: DetailsCatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
