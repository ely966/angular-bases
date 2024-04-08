import { Component, OnChanges, SimpleChanges, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { checkFormat } from '../function/checkFormat';
import { Bic } from '../interfaces/bic.interface';
import { ApiHubService } from '../services/apiHub.service';
import { AsyncValidatorService } from '../services/async-validator.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-token-prueba',
  templateUrl: './token-prueba.component.html',
  styleUrl: './token-prueba.component.css',
})
export class TokenPruebaComponent implements OnChanges {
  constructor(
    private tokenService: TokenService,
    private requestService: ApiHubService,
    private formBuilder: NonNullableFormBuilder,
    private asyncValidator: AsyncValidatorService
  ) {}
  //https://medium.com/@tayuelo26/angular-signals-gu%C3%ADa-para-principiantes-parte-1-cdfe64e53c0c
  //Representa la dependencia que deberia ser injectada
  private dataAsyncValidator = inject(AsyncValidatorService);
  dataReceiverBIC = this.dataAsyncValidator.bicResponse;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.asyncValidator.bicResponse);
  }

  //bic: Bic = { bic: '' };
  bic: Bic = { bic: '' };
  // resultBic: WritableSignal<DataReceived | null> | undefined;

  // = {
  //   data: {
  //     valid: false,
  //     bank_code: '',
  //     country_code: '',
  //     location_code: '',
  //     branch_code: null,
  //   },
  // };

  //formulario
  ///^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/con tildes regex patterValidator https://regex101.com/r/6tKFnj/1
  //correcto: HBUKGB4B

  //quitar el formGroup. porque sino es de tipo any
  myForm = this.formBuilder.group(
    {
      // bic: [
      //   '',
      //   [Validators.required, Validators.pattern('[A-Z]{6}[0-9]{1}[A-Z]{1}')],
      //   [],
      // ],
      bic: this.formBuilder.control('', {
        validators: [
          Validators.required,
          // Validators.pattern('[A-Z]{6}[0-9]{1}[A-Z]{1}'),
        ],
        asyncValidators: [
          this.asyncValidator.validate.bind(this.asyncValidator),
        ], //bind:
        updateOn: 'blur', //Saber cuando actualizarse/ cuando llamar a este validador.blur cuando sale del input/pierdes el focus
      }),
    },
    {
      validators: checkFormat,
    }
  );

  /*Comprobar error*/
  checkError(campo: string): boolean | undefined {
    // console.log(`a ${this.datosRecibidos()?.data.bank_code} |json`);
    return (
      (this.myForm.get(campo)?.touched || this.myForm.get(campo)?.dirty) &&
      this.myForm.get(campo)?.invalid
    );
  }

  showErrors(campo: string): string | null {
    if (!this.myForm.get(campo)?.errors) return null;
    const errors = this.myForm.get(campo)?.errors || {};
    //console.log(errors);
    for (let error of Object.keys(errors)) {
      switch (error) {
        case 'required':
          return 'Este campo es requerido';
        case 'errorBic':
          return 'No formato correcto. El formato correcto debe ser bic, ejemplo: HBUKGB4B';
      }
    }
    return null;
  }

  // //Enviar la information
  // sendBic(bicRecibido: Bic) {
  //   this.requestService.sendRequest(bicRecibido).subscribe({
  //     next: (bicReceived) => {
  //       console.log(bicReceived);
  //     },
  //   });
  // }

  onSubmitForm() {
    //Formulario se marque todos los campos
    this.myForm.markAllAsTouched();

    //Si el formualrio es invalido
    if (this.myForm.invalid) return;

    //Si todo es correcto
    console.log(this.myForm.value);

    //this.bic es {bic: string}. le añadimos el valor del formulario ahi
    this.bic.bic = this.myForm.controls['bic'].value;
    //this.sendBic(this.bic);
    //this.bic = this.myForm.controls['bic'].value;
    //this.tokenService.createToken(this.bic);
    //  this.asyncValidator.bicResponse.arguments
    //console.log(this.asyncValidator.bicResponse.arguments);
  }
}
