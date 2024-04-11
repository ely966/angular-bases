import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  /*Idioma seleccionado*/
  selectedLanguage = 'en';
  translate = inject(TranslateService);

  changeLanguage(language: string) {
    this.translate.use(language);

    //  this.translate.use('es').subscribe({
    //   next: (response) => {
    //     //te devuelve todo el json.En el json se coloca als traducciones
    //     const prueba = this.translate.instant('Door'); //Se le pasa el literal que quieres, y te devuelve el texto traducido
  }
}
