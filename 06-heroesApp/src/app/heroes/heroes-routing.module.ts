import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: '', //localhost:4200/heroes/
    component: LayoutPageComponent,
    children: [
      //routes hijas de layout. seria todo como lcoalhost:4200/heroes/<path>
      {
        //localhost:4200/heroes/new-hero
        path: 'new-hero',
        component: NewPageComponent,
      },
      {
        //localhost:4200/heroes/search
        path: 'search',
        component: SearchPageComponent,
      },
      {
        // localhost:4200/heroes/edit/1234
        path: 'edit/:id',
        component: NewPageComponent,
      },
      {
        path: 'list',
        component: ListPageComponent,
      },
      {
        //localhost:4200/heroes/123
        path: ':id', //esta id debe ir al final porque sino, no entra en las demas rutas
        component: HeroPageComponent,
      },
      {
        //localhost:4200/heroes  la primera vez que entramos
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
