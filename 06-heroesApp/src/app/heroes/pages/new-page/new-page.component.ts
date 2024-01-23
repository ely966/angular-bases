import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css',
})
export class NewPageComponent implements OnInit {
  //Formulario reactivo
  //los numneros se inicializa con 0 asi cambia a number
  //dentro todas las propiedades que el formulario controle
  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl<string>('', { nonNullable: true }), //no nulo, los dema spueden ser null
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - COmics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - COmics',
    },
  ];

  constructor(
    private heroeService: HeroesService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //parametros que vienen por el url, apra cargarlos en el formulario
    //pone /edit si es editar
    //si en el url no incluye la palabra edit
    if (!this.router.url.includes('edit')) return;

    //si incluye en el url edit

    this.activateRouter.params
      .pipe(switchMap(({ id }) => this.heroeService.getHeroById(id)))
      .subscribe((hero) => {
        //si el heroe no existe sacamos la apersona de la pantalla
        if (!hero) return this.router.navigateByUrl('/');

        //si existe. reset regresa el formulario en su formna original y si mandas un valor coge todos los valor de ese objeto
        //si el formulkario tiene las propiedadees identicas a los nombres del propiedades del objeto, ccarga sus valores
        this.heroForm.reset(hero);
        return;
      });
  }

  // onSubmit(): void {//asi por que el boton esta afuera del form
  //   console.log({
  //     formIsValid: this.heroForm.valid,
  //     value: this.heroForm.value,
  //   });
  // }

  get currentHero(): Hero {
    //const hero = this.heroForm.value;
    const hero = this.heroForm.value as Hero; //que trate este formHero como un Hero
    return hero;
  }
  //verlo enm html {{currentHero | json}}
  onSubmit(): void {
    //si tiene ID es que queremos actualizar, sino es crear uno nuevo
    //asi por que el boton esta afuera del form
    if (this.heroForm.invalid) return; //si el formulario no es valido, no haga nada

    //SI TENEMOS ID UPDATE
    //si tiene ID es que queremos actualizar, sino es crear uno nuevo
    if (this.currentHero.id) {
      this.heroeService.updateHero(this.currentHero).subscribe((hero) => {
        //mostrar snackbar
      });
      return;
    }

    //SI NO TENEMOS UN ID CREAR
    if (!this.currentHero.id) {
      this.heroeService.addHero(this.currentHero).subscribe((hero) => {
        //mostrar snackbar
      });
    }
    //this.heroeService.updateHero(this.heroForm.value);
  }

  onDeleteHero() {
    if (!this.currentHero.id) throw Error('Hero is is required');

    this.heroeService
      .deleteHeroById(this.currentHero.id)
      .subscribe((wasDeleted) => {
        if (wasDeleted) this.router.navigate(['/heroes']);
      });
  }
}
