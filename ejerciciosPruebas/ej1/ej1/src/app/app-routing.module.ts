import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    // loadChildren: () => import(./PostsModule/)
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'formularioAnidados',
    // import('./formulario-anidados/formulario-anidados.module').then((m)=>m.FormulariosAnidadosModule)
    loadChildren: () =>
      import('./formularios-anidados/formularios-anidados.module').then(
        (m) => m.FormulariosAnidadosModule
      ),
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
