import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormulariosAnidadosRoutingModule } from './formularios-anidados-routing.module';
import { FormularioAnidadoComponent } from './formulario-anidado/formulario-anidado.component';

@NgModule({
  declarations: [
    FormularioAnidadoComponent
  ],
  imports: [
    CommonModule,
    FormulariosAnidadosRoutingModule,
    ReactiveFormsModule,
  ],
})
export class FormulariosAnidadosModule {}
