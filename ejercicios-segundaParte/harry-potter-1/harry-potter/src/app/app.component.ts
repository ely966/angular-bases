import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'harry-potter';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeLanguage() {
    this.translate.use('es').subscribe({
      next: (response) => {
        //te devuelve todo el json.En el json se coloca als traducciones
        const prueba = this.translate.instant('Door'); //Se le pasa el literal que quieres, y te devuelve el texto traducido
        console.log(prueba);
        console.log(response);
      },
    });
    // const prueba = this.translate.instant('BOOKS'); //Se le pasa el literal que quieres, y te devuelve el texto traducido
    // console.log(prueba);
  }

  //   setAppLang() {
  //     this.translate.setDefaultLang('en');
  //     this.translate.use(this.translate.getBrowserLang()!); //ver el idioma del navegador
  //   }
}
