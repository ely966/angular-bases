import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',traer home
  //   // loadChildren: ( () => ())
  //   loadChildren: () =>
  //     import('./posts/posts.module').then((m) => m.PostsModule),
  // },
  {
    path: '',
    // loadChildren: ( () => ())
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'formAnid',
    loadChildren: () =>
      import('./formularios-anidados/formularios-anidados.module').then(
        (m) => m.FormulariosAnidadosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
