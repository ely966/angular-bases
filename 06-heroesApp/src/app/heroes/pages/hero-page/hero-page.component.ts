import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent implements OnInit {
  public hero?: Hero; //opcional ya que al inicio esta null
  //necesito leer cual es el url. activatedRoute tengo la ruta activa
  //router es apra sacar a la persona de forma progrematica,
  constructor(
    private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  //dc-flash
  ngOnInit(): void {
    //ahora tengo acceso a todos los parametos de la url, como un observable
    //switchMap me permite recoger esos params y destructurarlo apr arecoger el id
    this.activatedRoute.params
      .pipe(
        //delay(3000), //vaya mas despacio y ver el mensaje de espera
        switchMap(({ id }) => this.heroeService.getHeroById(id))
      )
      .subscribe((hero) => {
        //si el hero no existe usamos router.navigate para redigir a la persona
        if (!hero) return this.router.navigate(['/heroes/list']);

        //pero si existe
        this.hero = hero;
        console.log({ hero });
        return;
      });
  }

  goBack(): void {
    this.router.navigateByUrl('/heroes/list');
  }
  // this.activatedRoute.params
  //     .pipe(switchMap(({ id }) => this.heroeService.getHeroById(id)),)
  //     .subscribe((params) => {
  //       console.log(params);
  //     });
  // }
}
