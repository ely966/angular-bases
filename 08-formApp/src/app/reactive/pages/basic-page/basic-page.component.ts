import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 6,
};
@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
})
export class BasicPageComponent {
  //importar n el module ReactiveFormsModule
  // public myForm: FormGroup = new FormGroup({
  //   //nombre: new FormCOntrol(valor 1 o por defecto, validaciones sincronas, si e suna no hace falta [], validaciones asincronas)
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0, [], []),
  //   inStorage: new FormControl(0, [], []),
  // });
  // public myForm: FormGroup = this.fb.group({
  //   name: ['', [], []],
  //   price: ['', [], []],
  //   inStorage: ['', [], []],
  // });
  public myForm: FormGroup = this.fb2.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder, private fb2: NonNullableFormBuilder) {}

  ngOnInit(): void {
    //this.myForm.reset(rtx5090); //lo que muetsra el formulario
  }

  //globalizar lso errores
  //Identifica el error
  isValidField(field: string): boolean | null {
    //return this.myForm.controls['name'].getError('required') && this.myForm.controls['name'].touched
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }
  //isValidFieldDetectammos el error pero no muetsra una frase concreta
  //Recoge el error y especifica frase a mostrrar. fiield el campo
  getFieldError(field: string): string | null {
    //pregunta si no tiene ese campo y no tenga errores
    if (!this.myForm.controls[field]) return null;
    //si es null, no siga
    const errors = this.myForm.controls[field].errors || {};

    const errorRequired = this.myForm.controls[field].hasError('required'); //Para una validacion

    //sacar todas las llaves de esos erroes, nos dara un array con las claves del objeto errors
    for (const key of Object.keys(errors)) {
      console.log(key); //Devuelve required, porque no escribio en el input html
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracters`;
      }
    }
    return null;
  }

  onSave(): void {
    if (this.myForm.invalid) {
      //inicio si le das al boton, salte los requisitos
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    //this.myForm.setValue();establecer el valor a un input en particular
    //this.myForm.reset({ price: 0, inStorage: 0 });
    this.myForm.reset();
  }
}
