import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidatorsService } from '../../../shared/validators/email-validator.service';
import * as customValidators from '../../../shared/validators/valifators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  //public myForm: FormGroup = new this.formBuilder.group[]
  public myForm: FormGroup = this.formBuilder.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(
            this.validatorsService.firstNameAndLastnamePattern
          ), //nombre debe ser compuesto 2 palabras
        ],
      ],
      //email: ['',[Validators.required,Validators.pattern(this.validatorsService.emailPattern),],[new EmailValidator()],], //validacion asincrona],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorsService.emailPattern),
        ],
        [this.emailValidation], //this.emailValidator
      ],
      username: ['', [Validators.required, customValidators.cantBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      //añadir el comparar pass1 y pass2. Cuidado debe ser `validators`no `Validators
      validators: [
        this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2'),
      ],
    }
  );

  // public myForm: FormGroup = this.formBuilder.group({
  //   name: [
  //     '',
  //     [
  //       Validators.required,
  //       Validators.pattern(customValidators.firstNameAndLastnamePattern), //nombre debe ser compuesto 2 palabras
  //     ],
  //   ],
  //   email: [
  //     '',
  //     [Validators.required, Validators.pattern(customValidators.emailPattern)],
  //   ],
  //   username: ['', [Validators.required, customValidators.cantBeStrider]],
  //   password: ['', [Validators.required, Validators.minLength(6)]],
  //   password2: ['', [Validators.required]],
  // });

  constructor(
    private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidation: EmailValidatorsService
  ) {}

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
