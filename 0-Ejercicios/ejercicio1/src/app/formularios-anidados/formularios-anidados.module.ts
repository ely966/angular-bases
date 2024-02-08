import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormularioAnidadoComponent } from './formulario-anidado/formulario-anidado.component';
import { FormulariosAnidadosRoutingModule } from './formularios-anidados-routing.module';
import { FormularioAnidados2Component } from './formulario-anidados2/formulario-anidados2.component';

@NgModule({
  declarations: [FormularioAnidadoComponent, FormularioAnidados2Component],
  imports: [
    CommonModule,
    FormulariosAnidadosRoutingModule,
    ReactiveFormsModule,
  ],
})
export class FormulariosAnidadosModule {}
