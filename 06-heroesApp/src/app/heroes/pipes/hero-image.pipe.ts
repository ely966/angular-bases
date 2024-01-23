import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage',
})
//mandamos el heroe y devolvemos el url en string de al imagen
export class HeroImagePipe implements PipeTransform {
  transform(hero: Hero): string {
    //sino existe el heroe
    if (!hero.id && !hero.alt_img) {
      return 'assets/no-image.png';
    }

    //si exist eheroe con imagen

    if (hero.alt_img) return hero.alt_img; //https: //google.com/flash.png

    return `assets/heroes/${hero.id}.jpg`; //coma rara
  }
}
