import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorsService implements AsyncValidator {
  constructor() {}
  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {
    const email = control.value;

    console.log({ email });
    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        console.log({ email });

        //correo ya esta tomado
        if (email === 'fernando@gmail.com') {
          subscriber.next({ emailTaken: true }); //solo emite el siguiente vlaor
          subscriber.complete(); //limpieta y se desuscribe
          //return;
        }

        //Si es lcorreo etsa libre
        subscriber.next(null);
        subscriber.complete();
      }
    );
    return httpCallObservable;
  }

  //   validate(
  //     control: AbstractControl<any, any>
  //   ): Observable<ValidationErrors | null> {
  //     const email = control.value;

  //     console.log({ email });

  //     return of({
  //       emailTaken: true,
  //     }).pipe(delay(2000));
  //   }

  // return this.http. get(`https://miservicio.com{email}`).pipe(
  //     map(
  //         resp => {
  //             return (resp.length === 0) ? null: {emailTaken: true}
  //         }
  //     )
  // )
}
