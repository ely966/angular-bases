import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css',
})
export class EditPostComponent implements OnInit {
  /*Id del post que reecogemos del http*/
  // id: string = '';
  id: number = 0;
  tituloPagPadre = 'Editar Post';
  postMostrar: Post = {
    userId: 1,
    id: 0,
    title: '',
    completed: false,
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostsService
  ) {}
  ngOnInit(): void {
    //recoger ID de la url
    this.id = this.activateRoute.snapshot.params['id'];
    // this.idd = this.activateRoute.snapshot.params['id'];
    console.log(this.id);
  }

  //recibir el post editado desde formulario con output
  recibirPostEditado(postRecibeEditado: Post) {
    this.postMostrar = postRecibeEditado;

    this.postService.editPost(this.postMostrar, this.postMostrar.id).subscribe({
      next: () => {
        console.log('Editado');
      },
    });
  }
}
