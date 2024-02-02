import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioAnidadoComponent } from './formulario-anidado/formulario-anidado.component';

const routes: Routes = [
  {
    path: '',
    component: FormularioAnidadoComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulariosAnidadosRoutingModule {}
