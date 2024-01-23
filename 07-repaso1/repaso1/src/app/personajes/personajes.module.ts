import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListaPjComponent } from './components/lista-pj/lista-pj.component';
import { TablaPjComponent } from './components/tabla-pj/tabla-pj.component';
import { PersonajesComponent } from './personajes.component';

@NgModule({
  imports: [CommonModule],
  exports: [TablaPjComponent, PersonajesComponent],
  declarations: [TablaPjComponent, ListaPjComponent, PersonajesComponent],
  providers: [],
})
export class PersonajesModule {}
