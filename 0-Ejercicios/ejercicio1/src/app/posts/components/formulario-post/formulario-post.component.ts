import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-formulario-post',
  templateUrl: './formulario-post.component.html',
  styleUrl: './formulario-post.component.css',
})
export class FormularioPostComponent implements OnInit {
  @Output()
  sendPostNew: EventEmitter<Post> = new EventEmitter();

  //Titulo para el formulario
  @Input() accion: string = '';

  //en el caso de editar recibir el id
  @Input() idd: string = '';
  //numero: Number = Math.floor(Math.random());
  //En el caso de edit recibira los datos del post a editar/ en el caso del registrar see usara de base
  postNew: Post = {
    id: 201,
    userId: 1,
    title: '',
    completed: false,
  };

  myForm: FormGroup = this.formBuilder.group(
    {
      id: [this.postNew.id],
      userId: [0, [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(6)]],
      completed: [false, Validators.required],
    },
    { validators: [] }
  );

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {}
  ngOnInit(): void {
    //Si variable id tiene contenido es que estamos editando.
    if (this.idd) {
      this.postService.getPostById(this.idd).subscribe({
        next: (postE) => {
          this.postNew = postE;
          console.log(postE);
          this.myForm.reset(this.postNew); //RESETEA EL FORMULARIO Y recoge el valor con el mismo nombre
        },
        error: (error) => {
          console.log(error);
        },
      });
    }

    //this.myForm.reset(this.postNew);
  }

  //VALIDACIONES

  //COmprobar si hay algun error y que si lo a tocado el input
  checkError(inputName: string): boolean | null {
    return (
      this.myForm.controls[inputName].invalid &&
      (this.myForm.controls[inputName].touched ||
        this.myForm.controls[inputName].dirty)
    ); //Dirty cambia el valor en el campo
    //this.myForm.controls[inputName].invalid es igual this.myForm.controls[inputName].errors
  }
  //SI hay errores, sacar el mensaje

  obtenerError(nameInput: string): string | null {
    //console.log(nameInput);

    //if (!this.myForm.controls[nameInput].hasError) return null; //es un metodo, tienes que pasarle un error
    if (!this.myForm.controls[nameInput].errors) return null;
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
