import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FomAnidSegundoTipoComponent } from './fom-anid-segundo-tipo/fom-anid-segundo-tipo.component';
import { FormAnidadosValCompletoComponent } from './form-anidados-val-completo/form-anidados-val-completo.component';
import { FormAnidadosValComponent } from './form-anidados-val/form-anidados-val.component';

const routes: Routes = [
  {
    path: 'validations',
    component: FormAnidadosValComponent,
  },
  {
    path: 'segundoTipoform',
    component: FomAnidSegundoTipoComponent,
  },
  {
    path: 'complete',
    component: FormAnidadosValCompletoComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'validations',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulariosAnidadosRoutingModule {}
