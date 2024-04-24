import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  selectedLanguage = 'en'; /*Lenguage por defecto*/
  translate = inject(TranslateService);

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
