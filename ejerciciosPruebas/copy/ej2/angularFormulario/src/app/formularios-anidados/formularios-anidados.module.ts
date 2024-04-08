import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FomAnidSegundoTipoComponent } from './fom-anid-segundo-tipo/fom-anid-segundo-tipo.component';
import { FormAnidadosValCompletoComponent } from './form-anidados-val-completo/form-anidados-val-completo.component';
import { FormAnidadosValComponent } from './form-anidados-val/form-anidados-val.component';
import { FormulariosAnidadosRoutingModule } from './formularios-anidados-routing.module';

@NgModule({
  declarations: [
    FormAnidadosValComponent,
    FormAnidadosValCompletoComponent,
    FomAnidSegundoTipoComponent,
  ],
  imports: [
    CommonModule,
    FormulariosAnidadosRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class FormulariosAnidadosModule {}
