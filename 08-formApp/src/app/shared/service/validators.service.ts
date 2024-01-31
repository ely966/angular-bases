import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();

    if (value === 'strider') {
      return {
        noStrider: true,
      };
    }

    return null;
  };

  public isValidField(form: FormGroup, field: string) {
    // return (
    //     this.myForm.controls[field].errors && this.myForm.controls[field].touched
    //   );
    return form.controls[field].errors && form.controls[field].touched;
  }

  //PASSWORD
  //SI PASS1 ES IGUAL A PASWORD 2
  public isFieldOneEqualFieldTwo(field1: string, field2: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;
      console.log('d');
      //si son diferentes
      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({ notEqual: true }); //mandar error al segundo campo, input, por que no es igual a la primera contraseña
        return { notEqual: true };
      }

      //si la contraseñas son iguales, como tiene que ser
      formGroup.get(field2)?.setErrors(null); //limpieza de errores, pero quita lso demas errores excepto el required
      return null;
    };
  }

  // public isFieldOneEqualFieldTwo(field1: string, field2: string) {
  //   return (formGroup: FormGroup): ValidationErrors | null => {
  //     const fieldValue1 = formGroup.get(field1)?.value;
  //     const fieldValue2 = formGroup.get(field2)?.value;
  //     console.log('d');
  //     //si son diferentes
  //     if (fieldValue1 !== fieldValue2) {
  //       formGroup.get(field2)?.setErrors({ notEqual: true }); //mandar error al segundo campo, input, por que no es igual a la primera contraseña
  //       return { notEqual: true };
  //     }

  //     //si la contraseñas son iguales, como tiene que ser
  //     formGroup.get(field2)?.setErrors(null); //limpieza de errores, pero quita lso demas errores excepto el required
  //     return null;
  //   };
  // }
}
