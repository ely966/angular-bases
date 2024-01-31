import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, map, of, tap } from 'rxjs';
import {
  Country,
  Region,
  SmallCountry,
} from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root', //si quitaramos esto deberiamos añadirlo ebn providers en modules, ya que sinos oloo funcionara dentro de este modulo. por eso httopClientModule mejor en appModule
})
export class CountriesService {
  private baseurl: string = 'https://restcountries.com/v3.1';
  //base con parametros concreto
  //private base: string =
  // 'https://restcountries.com/v3.1/region/americas?fields=cca3,name,borders';
  //borders https://restcountries.com/v3.1/alpha/USA?fields=cca3,name,borders
  //sea copia lo que salga y no lo editen
  private _regions: Region[] = [
    Region.Africa,
    Region.Amercias,
    Region.Asia,
    Region.Europa,
    Region.Oceania,
  ];

  constructor(private httpCliente: HttpClient) {}

  get regions(): Region[] {
    return [...this._regions]; //rompo la relacion con el regions original, aunque editen fuera
  }

  //recoger los paises bajo esa region
  //https://restcountries.com/v3.1/region/americas?fields=cca3,name,borders obtener cocnreto aprametros
  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    //si no regresa una region
    if (!region) return of([]); //convierte el resultado array en un observable si esta vacio

    const url: string = `${this.baseurl}/region/${region}?fields=cca3,name,borders`;
    //el resultado es algo direfernnte a nuestra interfaz asi que no podemos hacerloc omo habitualmente
    //el nombre no es string es un array hay que cambiarlo

    //map pipe. recoge el response y que regrese otra cosa. ej countries => [] devuelve array vacio
    //map de un objeto. que me devolvera un country con la informacion que estoy solicitando  ?[] o || []
    return this.httpCliente.get<Country[]>(url).pipe(
      map((countries) =>
        countries.map((country) => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? [],
        }))
      )
      //tap((response) => console.log({ response }))
    );
  }

  //cONSEGUIR FRONTERAS DE UN PAIS, AlphaCode = cca3

  getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry> {
    //https://restcountries.com/v3.1/alpha/USA?fields=cca3,name,borders
    //console.log({ alphaCode });//se ve un valor vacio en consola
    const url: string = `${this.baseurl}/alpha/${alphaCode}?fields=cca3,name,borders`;
    //no es un pais sinoq ue luce como un pais la forma que devuelve
    return this.httpCliente.get<Country>(url).pipe(
      //map apra transformar el country en smallCountry
      tap((country) => {
        console.log(country);
      }),

      map((country) => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? [],
      }))
    );
  }

  //Obtener la informacion de los border, para tener lso nombre en vez de las siglas

  getCountryBordersByCodes(borders: string[]): Observable<SmallCountry[]> {
    if (!borders || borders.length === 0) return of([]); //si null o no tiene borders, que devuelva array vacio
    //listado de borders, y en cada uno de ellos hacer la peticion de http. regresara un observable con smallCountry

    const countriesRequest: Observable<SmallCountry>[] = [];

    borders.forEach((code) => {
      const request = this.getCountryByAlphaCode(code);
      //llamo al metodo con este codigo, y al respuesta lo gauirdo en countryRequest
      countriesRequest.push(request);
    });

    //mandamos nuetsro conjunto de observables countriesRequest. Emitir cada observable dentro del array, de forma simultanea
    return combineLatest(countriesRequest);
  }
}
// mal map(country => country.map(country => ({
//   name: country.name.common,
//   cca3: country.cca3,
//   borders: country.borders
// })
