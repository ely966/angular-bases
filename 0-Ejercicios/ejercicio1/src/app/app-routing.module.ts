import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './posts/pages/home/home.component';

const routes: Routes = [
  {
    path: 'auth',
    //loadChildren: () =>{}
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
    // canActivate: [privateGuard],
    //canMatch: [privateGuard],
  },
  {
    path: 'form-anidados',
    loadChildren: () =>
      import('./formularios-anidados/formularios-anidados.module').then(
        (m) => m.FormulariosAnidadosModule
      ),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
