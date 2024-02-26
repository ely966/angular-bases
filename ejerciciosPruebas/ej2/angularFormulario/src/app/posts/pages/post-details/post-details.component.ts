import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  id: number = 0;
  /*Donde guardar valor del post*/
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
    /*Recoger id del post del http*/
    this.id = this.activateRoute.snapshot.params['id'];

    this.postService.recogerPostById(this.id).subscribe({
      next: (valorPost) => {
        this.postMostrar = valorPost;
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
