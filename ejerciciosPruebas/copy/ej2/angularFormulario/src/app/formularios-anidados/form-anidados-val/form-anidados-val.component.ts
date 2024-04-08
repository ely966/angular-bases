import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { compararP } from '../validations/compararP';

@Component({
  selector: 'app-form-anidados-val',
  templateUrl: './form-anidados-val.component.html',
  styleUrl: './form-anidados-val.component.css',
})
export class FormAnidadosValComponent {
  constructor(private formBuilder: NonNullableFormBuilder) {}

  //Fomrulario
  myForm: FormGroup = this.formBuilder.group(
    {
      name: ['', [Validators.required]],
      age: [0, [Validators.required, Validators.min(18)]],
      email: ['', [Validators.email, Validators.required]],
      user: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      repeatPass: ['', [Validators.required]],
    },
    {
      validators: compararP(),
    }
  );

  /***============================================= */
  /***============================================= */
  /**COMPROBAR ERRORES */
  /*VER SI HAY ERRORES*/

  checkError(campo: string) {
    return (
      (this.myForm.controls[campo].dirty ||
        this.myForm.controls[campo].touched) &&
      this.myForm.controls[campo].invalid
    );
  }
  /*comprobar cual es el error*/
  comprobarCualError(campo: string): string | null {
    if (!this.myForm.controls[campo].errors) {
      return null;
    }
    const errors = this.myForm.controls[campo].errors || {};
    for (let error of Object.keys(errors)) {
      switch (error) {
        case 'required':
          return 'Este campo es requerido';
        case 'email':
          return 'El email no tiene un formato adecuado';
        case 'noEqualsPass':
          return 'Las contraseñas debe coincidir';
        case 'min':
          return 'La edad minima es 18 años';
      }
    }
    return null;
  }
  /***============================================= */
  onSubmit() {
    this.myForm.markAllAsTouched();

    if (this.myForm.invalid) {
      console.log('na');
      return;
    }

    console.log(this.myForm.value);
    console.log('ok');
  }
}
