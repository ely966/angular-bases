import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Bic } from '../interfaces/bic.interface';

export function checkFormat(): ValidatorFn {
  return (control: AbstractControl<Bic>): ValidationErrors | null => {
    const bicValue = control.value; //recoger el valor
    const bicRegex = /^[A-Z]{6}[0-9]{1}[A-Z]{1}$/; //el patron que debe cumplis
    //comprobar si cumple con el patron del formato
    if (!bicRegex.test(bicValue.bic)) {
      control.get('bic')?.setErrors({ errorBic: false });
      return { pattern: false };
    }
    return null;
  };
}
