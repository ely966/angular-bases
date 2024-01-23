import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  //Post que recogeremos
  id: string = '';
  postMostrar: Post | undefined; //post recogido por su id

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    //llamamos al servidor, y al metodo, para recoger la informacion del post con este id
    this.postService.getPostById(this.id).subscribe({
      next: (post) => {
        this.postMostrar = post;
        //console.log(post);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
