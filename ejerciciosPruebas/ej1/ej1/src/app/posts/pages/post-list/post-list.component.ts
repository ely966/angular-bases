import { Component, OnInit } from '@angular/core';
import { Post } from '../../interface/posts.interface';
import { PostService } from '../../servicios/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  //posts
  posts: Post[] = [];
  posts2: Post[] = [];
  constructor(private postsService: PostService) {}

  ngOnInit(): void {
    this.obtenerPosts();
  }

  obtenerPosts() {
    //al iniciar recoger los post de la api
    this.postsService.recogerPosts().subscribe({
      next: (postObtenidos) => {
        //console.log(postObtenidos);
        this.posts = postObtenidos;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
