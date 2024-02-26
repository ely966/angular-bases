import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'post-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  //Aqui llegara desde el padre
  @Input() listPost: Post[] = [];

  constructor(private postService: PostsService) {}

  deletePost(id: number) {
    this.postService.deleteById(id).subscribe({
      next: () => {
        console.log('borrado completado');
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
