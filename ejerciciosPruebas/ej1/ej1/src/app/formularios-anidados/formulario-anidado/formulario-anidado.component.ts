import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrl: './formulario-anidado.component.css',
})
export class FormularioAnidadoComponent {
  errores: Validators[] | null = [];
  constructor(private formBuilder: FormBuilder) {}

  myForm: FormGroup = this.formBuilder.group({
    nombre: ['', []],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    repeatPassword: ['', [Validators.required]],
  });

  //comprobar si hay error
  checkError(campoInput: string) {
    return (
      (this.myForm.controls[campoInput].invalid ||
        this.myForm.controls[campoInput].touched) &&
      this.myForm.controls[campoInput].dirty
    );
  }

  //comrpobar el error que es

  comprobarElErrorQueTiene(campoInput: string): string | null {
    if (!this.myForm.controls[campoInput].errors) return null;

    const errores = this.myForm.controls[campoInput].errors || {};

    for (let error of Object.keys(errores)) {
      switch (error) {
        case 'required':
          return 'El campo es requerido';

        case 'email':
          return 'Formato de correo incorrecto. Ej. maria@gmail.com';

        case 'paseIguales':
          return 'Las contraseñas deben ser iguales';
      }
    }
    return null;
  }

  ngSubmit() {
    this.myForm.markAllAsTouched;

    if (this.myForm.invalid) {
      return;
    }

    //si todo correcto
    console.log(this.myForm.value);
  }
}
