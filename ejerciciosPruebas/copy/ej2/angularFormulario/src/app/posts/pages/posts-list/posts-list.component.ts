import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent implements OnInit {
  postsRegocidos: Post[] = [];

  constructor(private postService: PostsService) {}
  ngOnInit(): void {
    this.recogerPosts();
  }

  /*Recoger los valores de los post*/
  recogerPosts() {
    this.postService.recogerPost().subscribe({
      next: (postsRecib) => {
        this.postsRegocidos = postsRecib;
        // console.log(this.postsRegocidos);
      },

      error(err) {
        console.log(err);
      },
    });
  }

  /*==============================================================================*/
}
