import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { FormularioAninadosService } from '../services/formulario-aninados.service';
import { compararP } from '../validations/compararP';

@Component({
  selector: 'app-fom-anid-segundo-tipo',
  templateUrl: './fom-anid-segundo-tipo.component.html',
  styleUrl: './fom-anid-segundo-tipo.component.css',
})
export class FomAnidSegundoTipoComponent implements OnInit {
  hobbies: string[] = [''];
  campoComprobar: string = '';

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private formuAniService: FormularioAninadosService
  ) {}
  ngOnInit(): void {
    this.formuAniService.returnHobbies.subscribe({
      next: (hobbiesDevueltos) => {
        this.hobbies = hobbiesDevueltos;
      },
    });

    this.recuperarHobbies();
  }

  //Fomrulario
  myForm: FormGroup = this.formBuilder.group(
    {
      name: ['', [Validators.required]],
      age: [0, [Validators.required, Validators.min(18)]],
      email: ['', [Validators.email, Validators.required]],
      user: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      repeatPass: ['', [Validators.required]],
      // hobbies: [[''], [Validators.required]],se tiene que poner como array, frase de abajo. sino no se muestra en la pantalla
      hobbies: this.formBuilder.array([''], [Validators.required]),
    },
    {
      validators: compararP(),
    }
  );
  /**=======================GET======*/
  get hobbiesF() {
    return this.myForm.get('hobbies') as FormArray;
  }
  /***============================================= */
  /***============================================= */

  /*Recoger los hobbies*/

  recuperarHobbies() {
    this.formuAniService.returnHobbies.subscribe({
      next: (hobbiesDevueltos) => {
        this.hobbies = hobbiesDevueltos;
      },
    });
  }
  /***============================================= */
  /***============================================= */
  /**COMPROBAR ERRORES */
  /*VER SI HAY ERRORES*/
  /*ARRAY*/
  comprobarErrorArray(
    inputArray: string[],
    index: number
  ): boolean | undefined {
    return (
      (this.myForm.get(inputArray[index])?.touched ||
        this.myForm.get(inputArray[index])?.dirty) &&
      this.myForm.get(inputArray[index])?.invalid
    );
  }

  /***============================================= */
  /*No array*/
  checkError(campo: string) {
    this.campoComprobar = campo;
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
  /***============================================= */
  /*AÑADIR Y BORRAR HOBBIES*/
  addHobbies() {
    const addHobbie = new FormControl('', Validators.required); //se crea el nuevo control/hobbie
    this.hobbiesF.push(addHobbie); //añadimos el hobbie al array de hobbies que se extrae con el get
  }
  /*removeAt(i)*/
  onDeleteHobbie(i: number) {
    this.hobbiesF.removeAt(i);
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
