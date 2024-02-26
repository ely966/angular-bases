import { Component, Input } from '@angular/core';
import { Post } from '../../interface/posts.interface';
import { PostService } from '../../servicios/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  posts: Post[] = [];

  constructor(private postService: PostService) {
    console.log(this.posts);
  }

  //Borrar post
  deletePost(id: number) {
    this.postService.deletePost(id);
  }
}
