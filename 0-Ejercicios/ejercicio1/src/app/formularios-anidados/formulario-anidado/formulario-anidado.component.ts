import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { RecogidaDatosService } from '../services/recogida-datos.service';
import { compararPassword } from '../validaciones/fuctions/compararPassword';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrl: './formulario-anidado.component.css',
})
export class FormularioAnidadoComponent implements OnInit {
  //https://blog.angular-university.io/angular-custom-validators/
  ///Campo recogido para verificar errores
  inputForm: string | null = '';

  //Letras [a-zA-Z ]*
  ///^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/con tildes
  nameValidator2 = /^[A-Za-z\s]+$/;

  //Hobbies
  hobbies: string[] = [];
  //Creamos variable que consistira en los nuevos hobbies
  //public newHobbies: FormControl = new FormControl('', [Validators.required]);

  myForm = this.formBuilder.group(
    {
      name: [
        '',
        [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*')],
      ],
      password: ['', [Validators.required]],
      passwordRepeat: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      //hobbie: ['', [Validators.required]],
      hobbies: this.formBuilder.array([''], [Validators.required]),
    },
    {
      validators: compararPassword(),
    }
  );

  //recoger array del form
  //Siempre que se encuentre un array. pero ccon el rest de propiedades se recomienda tambien
  get hobbieForm() {
    return this.myForm.get('hobbies') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private recogidaDatos: RecogidaDatosService
  ) {}

  ngOnInit(): void {
    //Recojo los hobbies del servicio y los guardo en un array
    this.recogidaDatos.getHobbies().subscribe({
      next: (hobbies) => {
        //console.log(hobbies);
        this.hobbies = hobbies;
      },
    });
  }

  //==========ERRORES===========//

  //Chequear si hay errores
  checkInputError(campoInput: string): boolean | undefined {
    //return this.myForm.controls[campoInput].touched && this.myForm.controls[campoInput].hasError
    //this.myForm.controls.name.errors
    //const campo = this.myForm.controls.name.errors || null;
    //this.myForm.get('').valid;
    //this.myForm.get(campoInput)?.errors;
    //console.log(this.myForm.get(campoInput)?.errors);

    //si es tocado y invalido
    return (
      (this.myForm.get(campoInput)?.touched ||
        this.myForm.get(campoInput)?.dirty) &&
      this.myForm.get(campoInput)?.invalid
    );

    //   (this.myForm.controls[campoInput].dirty ||
    //     this.myForm.controls[campoInput].touched) &&
    //   this.myForm.controls[campoInput].invalid
    // );
  }

  //COMPROBAR ERRORES ARRAY
  arrayCheckInputError(
    inputArray: string[],
    index: number
  ): boolean | undefined {
    //si es tocado y invalido
    return (
      (this.myForm.get(inputArray[index])?.touched ||
        this.myForm.get(inputArray[index])?.dirty) &&
      this.myForm.get(inputArray[index])?.invalid
    );
  }

  mostrarError(inputName: string): string | null {
    //COmprobamos si hay error
    //if(this.myForm.controls[inputName].errors === null )
    //control.errors.required
    //Bueno
    // if (!this.myForm.controls[inputName].errors) return null;
    if (!this.myForm.get(inputName)?.errors) return null;
    // Recogemos los errores o null/vacio || {};
    // const errors = this.myForm.controls[inputName].errors || {};
    const errors = this.myForm.get(inputName)?.errors || {};

    //Si hay errores
    // // for (let error of Object(errors)) {   console.log(error);}
    for (let error of Object.keys(errors)) {
      console.log(error);
      switch (error) {
        case 'required':
          return 'Este campo es requerido';
        case 'email':
          return 'Formato de correo incorrecto. Debe ser como ejemplo: ejemplo@gmail.com';
        case 'noEqualsPass':
          return 'Contraseñas deben ser iguales';
        case 'pattern':
          return 'El nombre solo puede contener letras';
      }
    }
    return '';
  }

  //EXTRAER EL ERROR si existe

  //==========ERRORES===========//

  //============AÑADIR===============//
  onAddHobbie() {
    //this.myForm.controls['hobbies'].add
    const hobbieAdd = new FormControl('', Validators.required);
    this.hobbieForm.push(hobbieAdd);
  }
  //=====================DELETE======================//
  onDeleteHobbie(i: number) {
    this.hobbieForm.removeAt(i);
  }

  submitForm() {
    this.myForm.markAllAsTouched(); // los input se marque apra que salte errores si tiene

    if (this.myForm.invalid) return; //si es invalido no haga nada

    //si todo correcto

    console.log(this.myForm.value);
  }
}
