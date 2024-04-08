import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Address } from '../interfaces/address.interface';
import { RegistroUser, address } from '../interfaces/registroUser.interface';
import { RecogidaDatosService } from '../services/recogida-datos.service';
import { compararPassword } from '../validaciones/fuctions/compararPassword';

@Component({
  selector: 'app-formulario-anidados2',
  templateUrl: './formulario-anidados2.component.html',
  styleUrl: './formulario-anidados2.component.css',
})
export class FormularioAnidados2Component implements OnInit {
  //https://blog.angular-university.io/angular-custom-validators/
  ///Campo recogido para verificar errores
  //Variables

  addressPrueba: Address[] = [
    {
      address: new FormControl('Calle Pilar', Validators.required),
      city: new FormControl('Seville', Validators.required),
      code: new FormControl(41225, Validators.required),
    },
  ];

  pruebaFormulario: RegistroUser = {
    name: 'Maria Pilar',
    password: 'maria',
    passwordRepeat: 'maria',
    email: 'maria@gmail.com',
    hobbies: ['Leer', 'Viajar', 'Hacer Deporte'],
    //address: [{address:['Calle pilar', Validators.required], city:'Sevilla', 'Spain'}],
    addressAll: [
      { address: 'calle pilar', city: 'Sevilla', code: 12345 },
      { address: 'calle Andalucia', city: 'Cadiz', code: 45667 },
    ],
  };

  inputForm: string | null = '';
  botonPrueba: boolean = false;
  //Letras [a-zA-Z ]*
  ///^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/con tildes regex patterValidator https://regex101.com/r/6tKFnj/1
  nameValidator2 = /^[A-Za-z\s]+$/;

  //Guardamos los Hobbies que lelgan desde servicios
  hobbies: string[] = [];
  //Creamos variable que consistira en los nuevos hobbies

  //========Formulario====//
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
      //addressAll: this.formBuilder.array<FormGroup<Address>>(

      addressAll: this.formBuilder.array<FormGroup<Address>>([
        this.createAddressForm(),
      ]),
    },
    {
      validators: compararPassword(),
    }
  );

  //===========GET==========//
  //recoger array del form
  //Siempre que se encuentre un array. pero ccon el rest de propiedades se recomienda tambien
  get hobbieForm() {
    return this.myForm.get('hobbies') as FormArray;
  }

  ///
  get addresssForm() {
    return this.myForm.get('addressAll') as FormArray;
  }

  //devolvemos  Funcion para crear el formGroup (apartado de direcciones)
  createAddressForm() {
    return this.formBuilder.group<Address>({
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      code: new FormControl(0, Validators.required),
    });
  }
  //De serie mandara el objeto vacío y sino el que le mandemos
  //Darle un valor por defecto. Serviría para añadir  una dirección
  createAddressForm2(address: address = { address: '', city: '', code: 0 }) {
    return this.formBuilder.group<Address>({
      address: new FormControl(address.address, Validators.required),
      city: new FormControl(address.city, Validators.required),
      code: new FormControl(address.code, Validators.required),
    });
  }

  //==============CONSTRUCTOR==============//
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

        this.botonPrueba = true; //muestre boton al inicio
        //this.myForm.controls['address'].setValue([this.addressPrueba])
        //this.addresssForm.push(this.patchValues(this.addressPrueba));
        //this.myForm.controls['addressAll'].setValidators([this.addressPrueba])
      },
    });
  }
  //Añadir

  //==========================================//
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
  //-----
  //Mostrar Error concreto, segun el tipo de error devolver el requisito en string
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
      //console.log(error);
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

  //==========Fin-Metodos-ERRORES===========//

  //========================================================//
  //============AÑADIR Hobbie y se muestre en el formulairo===============//
  onAddHobbie() {
    //this.myForm.controls['hobbies'].add
    const hobbieAdd = new FormControl('', Validators.required);
    this.hobbieForm.push(hobbieAdd);
  }
  //==========DELETE hobbie y se elimine del formulario tambien======================//
  onDeleteHobbie(i: number) {
    this.hobbieForm.removeAt(i);
  }

  //===================================================
  //========Llenar el formulario===========//
  onRellenarForm() {
    //setValue es mas estrictivo a la hora de actualiza. Exige que el modelo tenga la misma estructura. Salta error, sino hay un campo.
    //patchValue actiualiza todos los datos, no tira error si no encuentra un campo, es menos estrictivo.

    //Limpiar todos los array del formulario
    this.hobbieForm.clear(); //array hoobbies
    this.addresssForm.clear(); //array direcciones
    //Procedemos añadir los array
    this.onRellenarArrayForm(this.pruebaFormulario.hobbies); //rellenar la parte array del formulario
    //Comprobamos que existe
    if (this.myForm.get('addressAll')) {
      this.onRellenarArrayFormAddress(this.pruebaFormulario.addressAll);
    }
    //this.onRellenarArrayFormAddress(this.pruebaFormulario.addressAll);
    this.myForm.patchValue(this.pruebaFormulario); //Rellenar el formulario
    //this.myForm.setValue;

    //Desaparece el boton de rellenar actumaticamente
    this.botonPrueba = false;
  }
  //Rellenar formualio form Hobbie
  //RELLENAR formmulario, la parte del ARRAY.
  onRellenarArrayForm(hobbies: string[]) {
    // for (let i = 1; hobbies.length > i; i++) {
    //   //valor 1 es porque el primer valor si lo pilla automaticamente y no lo repita(mejor dicho que lo muetsre)
    //   //this.myForm.get('hobbies').patchValue(hobbies[i]);

    //   const hobbieAdd = new FormControl('', Validators.required);
    //   hobbieAdd.setValue(hobbies[i]);
    //   this.hobbieForm.push(hobbieAdd);
    // }
    //ForEach
    hobbies.forEach((hobbie) => {
      const hobbieAdd = new FormControl('', Validators.required);
      hobbieAdd.setValue(hobbie);
      //this.hobbieForm.push(hobbieAdd);
    });
  }
  //mandar los valores de cada conjunto de direcciones del user, a`ra poder mostrarlo en el formulario
  onRellenarArrayFormAddress(addressAll: address[] | undefined) {
    if (addressAll === undefined) return; //siempre 3 iguales

    addressAll.forEach((address) => {
      const addressAdd2 = this.createAddressForm2(address);
      // const addressNew = this.formBuilder.group<Address>({
      //   address: new FormControl(address.address, Validators.required),
      //   city: new FormControl(address.city, Validators.required),
      //   code: new FormControl(address.code, Validators.required),
      // });

      this.addresssForm.push(addressAdd2);
    });
  }
  //Con el valor vamos recorreiendo el array del user prueba, por cada array, añladiremos el valores de las direcciones
  // onRellenarArrayDirectionValor(addressAll: Address[]) {
  //   addressAll.forEach((address) => {
  //     const addressAdd = this.createAddressForm();
  //     const addressNew = this.formBuilder.group<Address>({
  //       address: new FormControl(address.address, Validators.required),
  //       city: new FormControl(address.city, Validators.required),
  //       code: new FormControl(address.code, Validators.required),
  //     });
  //     this.addresssForm.push(addressNew);
  //     console.log();
  //     this.addresssForm.push(addressNew);
  //   });
  // }
  //==============================================//

  //DIRECCIONES

  //Añadir al darle al boton en formulario tambien
  onAddAddress() {
    //this.myForm.controls['hobbies'].add

    this.addresssForm.push(this.createAddressForm2());
  }
  //Borrar direccion
  onDeleteAddress(index: number) {
    this.addresssForm.removeAt(index);
  }

  ///============================

  //BOton reset
  //Cuando pulse este boton, se resetee el formulario

  onResetFormulario() {
    //this.myForm.reset([name: '',password: '',passwordRepeat: '',email: 'mara@gmail.com',this.hobbies: [''])
    //this.myForm.setValue();establecer el valor a un input en particular
    console.log('reset');
    // this.myForm.reset({
    //   name: '',
    //   password: '',
    //   passwordRepeat: '',
    //   email: '',
    //   hobbies: [''],
    // });
    this.hobbieForm.clear();
    this.addresssForm.clear();
    // this.myForm.reset();
    //aparezca el boton de prueba
    this.botonPrueba = true;
  }

  //========================================
  //Submit

  submitForm() {
    this.myForm.markAllAsTouched(); // los input se marque apra que salte errores si tiene

    if (this.myForm.invalid) return; //si es invalido no haga nada

    //si todo correcto

    console.log(this.myForm.value);
  }
}
