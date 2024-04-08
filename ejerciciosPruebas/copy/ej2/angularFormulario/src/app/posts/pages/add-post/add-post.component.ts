import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css',
})
export class AddPostComponent {
  constructor(
    private router: Router,
    private postService: PostsService,
    private activateRoute: ActivatedRoute
  ) {}

  recibirPost(post: Post) {
    this.addPosts(post);
  }

  addPosts(post: Post) {
    this.postService.addPost(post).subscribe({
      next: (resul) => {
        this.router.navigate(['..'], { relativeTo: this.activateRoute });
      },
    });
  }
}
