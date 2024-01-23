import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { PublicGuard } from './auth/guards/public.guard';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

//direccion a los dos subroutes
//dominio.com/'
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [PublicGuard], //viendo si puede pasar la ruta. puedes ir poniendo guardiar como por ejemplo, 1 gaurdioa apra ver si esta registrado. otro guar por el rol que tenga, otro guar por privilegios. cuando un guard falle, no comprobara los siguientes guards
    canMatch: [PublicGuard], //este es si eta registrado no puedes estar en el login sino dentro de la app, asi que te redirige a heroes
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then((m) => m.HeroesModule),
    canActivate: [AuthGuard], //viendo si puede pasar la ruta. puedes ir poniendo guardiar como por ejemplo, 1 gaurdioa apra ver si esta registrado. otro guar por el rol que tenga, otro guar por privilegios. cuando un guard falle, no comprobara los siguientes guards
    canMatch: [AuthGuard], //va dos veces uno va a heroe y luegoa  list, por la ruta hija
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    //redireccionar. esto es por defecto. cualquier pantalla va a pasar por aqui porque todos
    //tiene alguna parte vacio asi que se especifica con pathMatch : full para
    //que sea exacto
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
