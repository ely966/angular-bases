import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interface/posts.interface';
import { PostService } from '../../servicios/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  //this.id = this.activatedRoute.snapshot.params['id'];
  idPost: number = 0;
  postMostrar: Post = {
    id: 201,
    userId: 1,
    title: '',
    completed: false,
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  //recoger id en url
  ngOnInit(): void {
    //recoger id en url
    this.idPost = this.activateRoute.snapshot.params['id'];
    //Recoger datos de ese post

    this.postService.getPostById(this.idPost).subscribe({
      next: (post) => {
        this.postMostrar = post;
        console.log(post);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
