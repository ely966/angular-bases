import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  //datos del formulario
  usuario: User = {
    email: '',
    password: '',
  };

  //Pondremos las validaciones y ademas, luego recogera el valor
  //  myForm: FormBuilder = new FormGroup({
  //  })
  public myForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  //VALIDACIONES

  //Mostrar o no el mensaje de error. Comprobar si hay errores. Si es null es que no hay erroes y  tocado
  checkValidations(nameInput: string): boolean | null {
    return (
      this.myForm.controls[nameInput].errors &&
      this.myForm.controls[nameInput].touched
    );
  }
  //Si hay errores, elegir el error especifico
  obtenerError(nameInput: string): string | null {
    //como solo tenemos una restriccion
    if (!this.myForm.controls[nameInput].hasError) return null;
    //const error = this.myForm.controls[nameInput].hasError;
    const errors = this.myForm.controls[nameInput].errors || {}; //Me regresa un true si hay errores

    for (let error of Object.keys(errors)) {
      //console.log(error);
      switch (error) {
        case 'required':
          return 'Este dato es requerido';
        case 'email':
          return 'El formato del correo es incorrecto. Asegurate que tenga un formato email como por ejemplo ejemplo@gmail.com';
        case 'minlength':
          return 'No esta el minimo de caracteres. Minimo 4 caracteres';
      }
    }

    return null;
  }

  //Al realizarse el sumir del formulario llamaremos a este metodo
  onSubmit() {
    //se marquen los campos
    this.myForm.markAllAsTouched();

    if (this.myForm.invalid) return;
    //console.log(this.myForm.value);
    //this.usuario = this.myForm.controls as User;
    this.usuario = this.myForm.value; //Guardo el valor del formulario/datos del usuario en una interfaz para enviarlo ams facil
    this.authService.login(this.usuario);
  }
}
