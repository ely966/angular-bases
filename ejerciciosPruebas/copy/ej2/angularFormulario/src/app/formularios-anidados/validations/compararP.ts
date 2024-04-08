import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { User } from '../interfaces/user.interface';

export function compararP(): ValidatorFn {
  //Devuelve el error que se quiere que se muetsre como no equals
  return (control: AbstractControl<User>): ValidationErrors | null => {
    const value = control.value; //devuelve {name: '', password: '', passwordRepeat: '', email: '', hobbie: ''}Con sus valores
    const controll = control.get(value.pass); //recoger el campo que se comprobara si es igual

    //Si los campos estan vacios. Como queremos comprobar passs y repeat pass comprobamos esas
    if (!value.pass || !value.repeatPass) {
      return null;
    }

    // console.log(value.pass);
    // console.log(value.repeatPass);
    //Comprobamos si no son iguales, para devolver el noEqualsPass
    if (value.pass !== value.repeatPass) {
      console.log('pass no igual');
      //juntar el error con el campo
      //queremos euq el error salga en el repeatPass asi que a ese campo lo añadimos
      control.get('repeatPass')?.setErrors({ noEqualsPass: false });

      //devolvemos que hay error
      return { noEqualsPass: false };
    }

    return null; //ambas pass coinciden
  };
}
