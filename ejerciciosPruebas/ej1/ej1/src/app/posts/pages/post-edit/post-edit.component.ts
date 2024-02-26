import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interface/posts.interface';
import { PostService } from '../../servicios/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.css',
})
export class PostEditComponent implements OnInit {
  idPosts: number = 0;
  postEditar: Post = {
    id: 1,
    userId: 1,
    title: '',
    completed: false,
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostService
  ) {}
  ngOnInit(): void {
    //Recojo valor si hay
    //recoger id en url
    //recoger id en url
    this.idPosts = this.activateRoute.snapshot.params['id'];
    this.postService.getPostById(this.idPosts).subscribe({
      next: (post) => {
        this.postEditar = post;
        console.log(post);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  recibirValorPost(post: Post) {
    this.postService;
    console.log(this.postService);
    this.postEditar = post;
  }
}
