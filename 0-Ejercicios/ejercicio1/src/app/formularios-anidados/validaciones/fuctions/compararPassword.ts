import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RegistroUser } from '../../interfaces/registroUser.interface';

export function compararPassword(): ValidatorFn {
  // if(!password || !passwordRepeat) return null;
  //Devolvera el error que quiere que s emuestre como notEqual

  return (control: AbstractControl<RegistroUser>): ValidationErrors | null => {
    const value = control.value; //devuelve {name: '', password: '', passwordRepeat: '', email: '', hobbie: ''}Con sus valores
    const controll = control.get(value.password);
    // control.setErrors({ noEqualsPass: true });
    // console.log(controll);

    //Si la contraseña esta vacio
    if (!value.password || !value.passwordRepeat) {
      //console.log('vacio');
      return null;
    }
    //Comparamos las contraseñas
    // if (password === passwordRepeat) return null; //Si las dos contraseñas coinciden no deberia aver problemas
    //Que si no son iguales que
    if (value.password !== value.passwordRepeat) {
      console.log(value);
      console.log('pass no iguales');
      //control.get('password')?.setErrors({ noEqualsPass: false });
      control.get('passwordRepeat')?.setErrors({ noEqualsPass: false });

      return { noEqualsPass: false };
    }

    return null; //ultimo sea null
  };
}
// password: string,
//   passwordRepeat: string
