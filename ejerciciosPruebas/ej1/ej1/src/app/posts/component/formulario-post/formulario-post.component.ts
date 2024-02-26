import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interface/posts.interface';
import { PostService } from '../../servicios/post.service';

@Component({
  selector: 'app-formulario-post',
  templateUrl: './formulario-post.component.html',
  styleUrl: './formulario-post.component.css',
})
export class FormularioPostComponent implements OnInit {
  postNew: Post = {
    id: 1,
    userId: 1,
    title: '',
    completed: false,
  };
  @Input() idPost: number = 0;
  @Output()
  sendPostNewOrEdit: EventEmitter<Post> = new EventEmitter();

  //Fomrulario
  myForm: FormGroup = this.formBuilder.group({
    userId: [this.postNew.id, [Validators.required]],
    id: [1, [Validators.required]],
    title: ['', [Validators.required]],
    completed: [false, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    //Recojo valor si hay
    //recoger id en url
    //recoger id en url
    //this.idPost = this.activateRoute.snapshot.params['id'];

    if (this.idPost !== 0) {
      this.postService.getPostById(this.idPost).subscribe({
        next: (post) => {
          this.postNew = post;
          this.idPost = post.id;
          //console.log(post);
          this.myForm.reset(this.postNew);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
    //console.log('aa');
    //console.log(this.postNew);
    this.myForm.reset(this.postNew);
  }

  sendValuePostNew() {
    this.sendPostNewOrEdit.emit(this.postNew);
  }
  ngSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    } //activar siempre

    console.log(this.myForm.value);
    this.sendValuePostNew();
  }
}
