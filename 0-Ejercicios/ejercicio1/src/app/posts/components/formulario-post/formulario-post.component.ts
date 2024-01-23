import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-formulario-post',
  templateUrl: './formulario-post.component.html',
  styleUrl: './formulario-post.component.css',
})
export class FormularioPostComponent {
  @Output()
  sendPostNew: EventEmitter<Post> = new EventEmitter();

  //numero: Number = Math.floor(Math.random());

  postNew: Post = {
    id: 0,
    userId: 0,
    title: '',
    completed: false,
  };

  myForm: FormGroup = this.formBuilder.group({
    id: [900],
    userid: [1],
    title: ['', [Validators.required, Validators.minLength(6)]],
    completed: [false, Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  //VALIDACIONES

  //COmprobar si hay algun error y que si lo a tocado el input
  checkError(inputName: string): boolean | null {
    return (
      this.myForm.controls[inputName].errors &&
      this.myForm.controls[inputName].touched
    );
  }
  //SI hay errores, sacar el mensaje

  obtenerError(nameInput: string): string | null {
    if (!this.myForm.controls[nameInput].hasError) return null;

    //Si habia algun error,

    const errors = this.myForm.controls[nameInput].errors || {};

    for (let error of Object.keys(errors)) {
      switch (error) {
        case 'required':
          return 'Este dato es requerido';
        case 'minlength':
          return 'No esta el minimo de caracteres. Minimo 6';
      }
    }

    return null;
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) return;

    this.postNew = this.myForm.value;
    this.sendValuePostNew(this.postNew);
  }

  //enviar por output
  public sendValuePostNew(post: Post) {
    this.sendPostNew.emit(this.postNew);
  }
}
