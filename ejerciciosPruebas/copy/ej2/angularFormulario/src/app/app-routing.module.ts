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
    path: 'formAnid',
    loadChildren: () =>
      import('./formularios-anidados/formularios-anidados.module').then(
        (m) => m.FormulariosAnidadosModule
      ),
  },
  {
    path: 'posts',
    // loadChildren: ( () => ())
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  // {
  //   path: 'shared',
  //   loadChildren: () =>
  //     import('./shared/shared.module').then((m) => m.SharedModule),
  // },
  // {
  //   path: 'shared',
  //   children: [
  //     {
  //       path: 'sidebar',
  //       component: SidebarComponent,
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   // loadChildren: ( () => ())

  //   loadChildren: () =>
  //     import('./posts/posts.module').then((m) => m.PostsModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
