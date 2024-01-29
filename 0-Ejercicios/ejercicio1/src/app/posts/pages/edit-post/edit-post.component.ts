import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css',
})
export class EditPostComponent implements OnInit {
  //titulo y boton FOrmulario
  accion: string = 'Editar';

  //Id del post
  id: string = '';
  //datois del post editado. Por defecto esta vacio pero en el ionit cargara los datos y mandara al formulario
  postEdit: Post = {
    id: 0,
    userId: 0,
    title: '',
    completed: false,
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    private activateToute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //recoger ID de la url
    this.id = this.activateRoute.snapshot.params['id'];

    //recoger el valor del post apra editar desde el id
    //luego se mandara al formulario

    this.postService.getPostById(this.id).subscribe({
      next: (postE) => {
        this.postEdit = postE;
        console.log(this.postEdit);
        //redirigir a la lista atras
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //mando al servidor a editar el postr
  editarPost(postE: Post, id: number) {
    this.postService.editPost(postE, postE.id).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['../..'], { relativeTo: this.activateRoute });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  //recibir el post editado desde formulario con output
  recibirPostEditado(postRecibidoEd: Post) {
    this.postEdit = postRecibidoEd;
    //console.log(this.postEdit);this.router.navigate(['..', { relativeTo: this.activateRoute }]);
    this.editarPost(this.postEdit, this.postEdit.id);
  }
}
