import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'post-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  @Input() postList: Post[] | null = [];

  ngOnInit(): void {}

  //posts$ = this.postStoreServi.posts$;
}
