import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Address } from '../interfaces/address.interface';
import { FormularioAninadosService } from '../services/formulario-aninados.service';
import { compararP } from '../validations/compararP';

@Component({
  selector: 'app-form-anidados-val-completo',
  templateUrl: './form-anidados-val-completo.component.html',
  styleUrl: './form-anidados-val-completo.component.css',
})
export class FormAnidadosValCompletoComponent implements OnInit {
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
      addressAll: this.formBuilder.array<FormGroup<Address>>([
        this.createAddressForm(),
      ]),
    },
    {
      validators: compararP(),
    }
  );
  /**=======================GET======*/
  get hobbiesF() {
    return this.myForm.get('hobbies') as FormArray;
  }
  //Siempre que se encuentre un array. pero ccon el rest de propiedades se recomienda tambien

  ///
  get addresssForm() {
    return this.myForm.get('addressAll') as FormArray;
  }
  createAddressForm() {
    return this.formBuilder.group<Address>({
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      code: new FormControl(0, Validators.required),
    });
  }

  // //De serie mandara el objeto vacío y sino el que le mandemos
  // //Darle un valor por defecto. Serviría para añadir  una dirección
  // createAddressForm2(address: address = { address: '', city: '', code: 0 }) {
  //   return this.formBuilder.group<Address>({
  //     address: new FormControl(address.address, Validators.required),
  //     city: new FormControl(address.city, Validators.required),
  //     code: new FormControl(address.code, Validators.required),
  //   });
  // }
  /***============================================= */
  /***============================================= */
  /*Añadir Address*/
  onAddAddress() {
    this.addresssForm.push(this.createAddressForm());
  }
  /*Borrar Dirección. desde el get*/
  onDeleteAddress(index: number) {
    this.addresssForm.removeAt(index);
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
