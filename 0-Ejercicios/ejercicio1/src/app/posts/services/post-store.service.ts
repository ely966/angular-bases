import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../interfaces/post.interface';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class PostStoreService {
  private posts = new BehaviorSubject<Post[]>([]);
  posts$ = this.posts.asObservable(); //convierte en observable

  constructor(private postService: PostService) {
    console.log('Servicio post store');
  }

  getPost(): void {
    this.postService.getPost().subscribe({
      next: (postRecibido) => {
        this.posts.next(postRecibido); //valor siguiente
      },
      error: (error) => {
        console.log(error);
        this.posts.next([]);
      },
    });
  }
}
