import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css',
})
export class AddPostComponent {
  // postNew: Post = {
  //   id: 0,
  //   userId: 0,
  //   title: '',
  //   completed: false,
  // };

  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostService,
    private route: Router
  ) {}

  //recibir por outpost
  recibidoPost(post: Post) {
    this.addPosts(post);
  }

  addPosts(post: Post) {
    this.postService.addPost(post).subscribe({
      next: (resul) => {
        //console.log(resul);
        //this.route.navigateByUrl('/');
        this.route.navigate(['..'], { relativeTo: this.activateRoute });
      },
    });
  }
}
