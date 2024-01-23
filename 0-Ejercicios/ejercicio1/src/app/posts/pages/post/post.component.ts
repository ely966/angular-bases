import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from '../../interfaces/post.interface';
import { PostStoreService } from '../../services/post-store.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'post-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  public postList: Post[] = [];
  posts$ = this.postStoreService.posts$.pipe(
    map((posts) => {
      posts.forEach((element) => {
        element.title = 'hola';
      });
      return posts;
    })
  );

  constructor(
    private postService: PostService,
    private postStoreService: PostStoreService
  ) {}

  ngOnInit(): void {
    this.getPost();

    //this.postStoreService.getPost();
  }

  getPost(): void {
    this.postService.getPost().subscribe({
      next: (postRecibido) => {
        this.postList = postRecibido;
        //this.handleGetPostSuccess(postRecibido);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  handleGetPostSuccess(post: Post[]) {
    this.postList = post;
  }
}
