import { Injectable, signal } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';
import { Bic } from '../interfaces/bic.interface';
import { DataReceived } from '../interfaces/dataReceived.interface';
import { ApiHubService } from './apiHub.service';

@Injectable({
  providedIn: 'root',
})
export class AsyncValidatorService implements AsyncValidator {
  bicResponse = signal<DataReceived | null>(null); //variable que cada vez que cambie, te avisa
  constructor(private apiHub: ApiHubService) {}
  //SIN TECLEAR BOTON, DEVUELVE RESULTADO
  validate(
    //devuelve con formato error en observable
    control: AbstractControl<any, any>
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    //Control vacio.
    if (!control.value) {
      return of(null);
    }
    //Si el control no vacio
    const bic: Bic = { bic: control.value };
    return this.apiHub.sendRequest(bic).pipe(
      //map cambiar la respuesta, devolvemos un observable con el error
      map((response) => {
        this.bicResponse.set(response);
        // console.log(`a ${this.bicResponse()?.data.bank_code} |json`);
        if (!response.data.valid) {
          console.log('has entrado.No es valido');
          return { errorBic: true };
        } else {
          //no hay errores
          return null;
        }
      }),
      catchError(() => of({ errorBic: true })) //of devuelve un observable
    );
  }

  // validate () : ValidationErrors | null {

  //   if

  //   //invalid
  //   return {errorBic: 'Format invalid'}
  // }
}
