import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, switchMap, tap } from 'rxjs';
import { Region, SmallCountry } from '../interfaces/country.interfaces';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrl: './selector-page.component.css',
})
export class SelectorPageComponent implements OnInit {
  //tras seleccionar una region aqui se guardaran los paises, que se mostraran ne el segundo select
  public countriesByRegion: SmallCountry[] = [];
  //public borders: string[] = [];
  public borders: SmallCountry[] = [];

  public myForm: FormGroup = this.formBuilder.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    border: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private countriesService: CountriesService
  ) {}
  ngOnInit(): void {
    this.onRegionChanged(); //cada vez que seleccione una region
    this.onCountryChanged(); //cada vez que se seleccione un pais
    // //recoger el valor selecci9onado de region para luego asi saber que pasises mostrar
    // this.myForm.get('region')!.valueChanges.subscribe({
    //   next: (region) => {
    //     //console.log({ region: value });
    //     console.log({ region });
    //   },
    // });
  }

  //Obtener las regiones del servidor

  get regions(): Region[] {
    return this.countriesService.regions;
  }
  //RECOGE PAISES COUNTRY
  //cada vez que se selecciona una region en el selector
  onRegionChanged(): void {
    //recoger el valor selecci9onado de region para luego asi saber que pasises mostrar
    //recoger un observable y suscribirse a un susbcribe
    this.myForm
      .get('region')!
      .valueChanges.pipe(
        //tap.cada vez que cambie el valor de la region, seleccione otro region,this.myForm.get('country') no tenga valor
        //tap hace que al cambiar entre region, el otro selector de country, se quede con "Seleccione".
        tap(() => this.myForm.get('country')!.setValue('')),
        tap(() => (this.borders = [])),
        switchMap((region) =>
          this.countriesService.getCountriesByRegion(region)
        )
      )
      .subscribe({
        next: (countries) => {
          //console.log({ region: value });
          this.countriesByRegion = countries;
          //console.log({ countries });
        },
      });
  }

  //FRONTERAS
  //CADA vez que señlleccione un pais muestre sus fronteras
  //muestra el nombre de los apises en la frontera
  onCountryChanged(): void {
    //recoger el valor selecci9onado de region para luego asi saber que pasises mostrar
    //recoger un observable y suscribirse a un susbcribe
    this.myForm
      .get('country')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('border')!.setValue('')),
        //Arreglar si algun vacio esta vacio
        filter((value: string) => value.length > 0), //que filtre, que si devuelve un true continua. asi que si esta vacio no avanza
        switchMap((alphacode) =>
          this.countriesService.getCountryByAlphaCode(alphacode)
        ),
        switchMap((country) =>
          this.countriesService.getCountryBordersByCodes(country.borders)
        )
      )
      .subscribe({
        //observable con un listado de smallCOuntry
        next: (countries) => {
          //this.countriesByRegion = countries;
          //console.log(country.borders);
          //this.borders = country.borders;
          this.borders = countries;
        },
      });
  }

  //muestra Siglas del pais que estan en la frontera
  // onCountryChanged(): void {
  //   //recoger el valor selecci9onado de region para luego asi saber que pasises mostrar
  //   //recoger un observable y suscribirse a un susbcribe
  //   this.myForm
  //     .get('country')!
  //     .valueChanges.pipe(
  //       tap(() => this.myForm.get('border')!.setValue('')),
  //       //Arreglar si algun vacio esta vacio
  //       filter((value: string) => value.length > 0), //que filtre, que si devuelve un true continua. asi que si esta vacio no avanza
  //       switchMap((alphacode) =>
  //         this.countriesService.getCountryByAlphaCode(alphacode)
  //       )
  //
  //     .subscribe({ Devuelve un pais, y sacamos los borders
  //       next: (country) => {
  //         //this.countriesByRegion = countries;
  //         //console.log(country.borders);
  //         this.borders = country.borders;
  //       },
  //     });
  // }
}

// onRegionChanged(): void {
//   //recoger el valor selecci9onado de region para luego asi saber que pasises mostrar
//   this.myForm.get('region')!.valueChanges.subscribe({
//     next: (region) => {
//       //console.log({ region: value });
//       console.log({ region });
//     },
//   });
// }
