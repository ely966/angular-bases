import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {
  //forma tradicional
  // public myForm2= new FormGroup({
  //   favoriteGames: new FormArray([]),

  // })

  //Form inicial. Dinamica no sabe cuantos ccampos tenemos
  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Death stranding', Validators.required],
    ]),
  });

  public newFavorite: FormControl = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {}

  //HACER el listado de favorite games
  get favoriteGames() {
    //return this.myForm.get('favoriteGames');//asi no sabe que es el contenido es como un any
    return this.myForm.get('favoriteGames') as FormArray; //asi declaramos que es un array
  }

  //----------ERRORES------------///
  //Identifica el error
  isValidField(field: string): boolean | null {
    //return this.myForm.controls['name'].getError('required') && this.myForm.controls['name'].touched
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }
  //Formulario, si tiene errores y tocado
  isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  //isValidFieldDetectammos el error pero no muetsra una frase concreta
  //Recoge el error y especifica frase a mostrrar. fiield el campo
  getFieldError(field: string): string | null {
    //pregunta si no tiene ese campo y no tenga errores
    if (!this.myForm.controls[field]) return null;
    //si es null, no siga
    const errors = this.myForm.controls[field].errors || {};

    //sacar todas las llaves de esos erroes, nos dara un array con toidos los errores
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

  //----------f-ERRORES------------///
  //grupo es un objeto anidado dentro de nuestro formulario
  //A
  onAddToFavorites(): void {
    if (this.newFavorite.invalid) return; //si no es valido
    // console.log(this.newFavorite.value);
    const newGame = this.newFavorite.value; //el valor de la variable que creamos antes

    //insertarlo en el array
    //forma1
    //this.favoriteGames.push( new FormControl(newGame, Validators.required))//si no trabajas con el form builders
    //si trabajas con el formBuilder
    this.favoriteGames.push(
      this.formBuilder.control(newGame, Validators.required)
    );
    //el nombre no se quede ene ll input
    this.newFavorite.reset();
  }

  //DELETE
  onDelete(index: number): void {
    //this.myForm.get('favoriteGames') as FormArray;
    //GET que creamos mas arriba
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void {
    //si no es valido
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched(); //marca todo los campos
      console.log('n', this.myForm.value);
      return;
    }

    console.log(this.myForm.value);
    //que sepa q  que es  un array y borrar lso juegos favoritos de la pantalla
    (this.myForm.controls['favoriteGames'] as FormArray) =
      this.formBuilder.array([]);
    //restablecer el formulario
    this.myForm.reset();
  }
}
