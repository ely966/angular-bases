import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'post-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  @Input() id: number = 0;
  @Input() tituloPag: string = '';

  /*===*/
  /*Output sera el posteditado o nuevo se tiene que mandar*/
  @Output()
  sendPostNewOrEdit: EventEmitter<Post> = new EventEmitter();

  /*Donde guardar valor del post*/
  postMostrar: Post = {
    userId: 1,
    id: 0,
    title: '',
    completed: false,
  };
  /*=========================*/
  myForm: FormGroup = this.formBuild.group({
    userId: [1, [Validators.required]],
    id: [1, [Validators.required]],
    title: ['', [Validators.required]],
    completed: [false, [Validators.required]],
  });
  /*===*/
  constructor(
    private formBuild: NonNullableFormBuilder,
    private activateRoute: ActivatedRoute,
    private postService: PostsService
  ) {}
  ngOnInit(): void {
    /*Si es edit habra un id en el html y este lo recogera*/
    if (this.id > 0) {
      this.postService.recogerPostById(this.id).subscribe({
        next: (postRecibido) => {
          this.postMostrar = postRecibido;
          console.log(this.postMostrar);
          this.myForm.reset(this.postMostrar);
          this.id = 0;
        },
        error(err) {
          console.log(err);
        },
      });
    }

    // this.myForm.reset(
    //   this.postMostrar
    // ); /*Resetea el formulario y si es edit y esta relleno, entonces mostrara esos valores*/
  }
  /*=============================================*/
  /*=============================================*/
  /*COMPROBAR ERRORES */
  /*Check si hay error*/
  checkIfError(campoInput: string): boolean | null {
    return (
      (this.myForm.controls[campoInput].touched ||
        this.myForm.controls[campoInput].dirty) &&
      this.myForm.controls[campoInput].invalid
    );
  }
  /*Check que error es*/
  obtenerError(campoInput: string): string | null {
    if (!this.myForm.controls[campoInput].errors) return null;

    /*Si hay errores*/
    const errores = this.myForm.controls[campoInput].errors || {};
    // errores.forEach(element => {

    // });hacer foir each luego

    for (let error of Object.keys(errores)) {
      switch (error) {
        case 'required':
          return 'Este dato es requerido';
        case 'minlength':
          return 'No esta el minimo de caracteres. Minimo 6';
      }
    }

    return null;
  }
  /*=============================================*/
  /*=============================================*/
  onSubmit() {
    console.log(this.myForm.valid);
    /*Tocar losc ampos apra que salten error*/
    this.myForm.markAllAsTouched();

    /*Si es infalido*/
    if (this.myForm.invalid) {
      return;
    }

    /*Si todo correcto*/
    console.log(this.myForm.value);
    this.sendValuePostNewOrEdit(this.postMostrar);
  }

  //sendPostNewOrEdit
  //enviar por output
  public sendValuePostNewOrEdit(post: Post) {
    this.sendPostNewOrEdit.emit(this.postMostrar);
  }
}
