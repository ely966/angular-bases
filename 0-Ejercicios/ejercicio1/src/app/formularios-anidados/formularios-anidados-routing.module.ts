import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioAnidadoComponent } from './formulario-anidado/formulario-anidado.component';
import { FormularioAnidados2Component } from './formulario-anidados2/formulario-anidados2.component';

const routes: Routes = [
  {
    path: '',
    component: FormularioAnidadoComponent,
  },
  {
    path: 'form2',
    component: FormularioAnidados2Component,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulariosAnidadosRoutingModule {}
