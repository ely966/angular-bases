import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'post-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  @Input() postList: Post[] | null = [];

  constructor(private postService: PostService) {}
  ngOnInit(): void {}

  //posts$ = this.postStoreServi.posts$;
  //BORRAR POST

  deletePost(idPost: number): void {
    console.log(idPost);

    this.postService.deletePost(idPost);
  }
}
