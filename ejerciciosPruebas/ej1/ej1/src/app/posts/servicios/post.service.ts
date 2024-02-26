import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Post } from '../interface/posts.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  //Guardars post
  posts: Post[] = [];
  postById: Post = { userId: 0, id: 0, title: '', completed: false };
  //Url de posts
  private url: string = 'https://jsonplaceholder.typicode.com/todos'; //para todas las busquedad. Url
  urlId: string = '';
  constructor(private httpClient: HttpClient, route: Router) {}

  //Recoger todos los posts

  recogerPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url).pipe(
      tap((postsObtenidos) => {
        //console.log(postsObtenidos);
        this.posts = postsObtenidos;
        //console.log(this.posts);
      })
    );
  }

  get postsGet(): Post[] {
    return [...this.posts];
  }

  //recorger un post por id

  getPostById(id: number): Observable<Post> {
    this.urlId = this.url + '/' + id;
    return this.httpClient.get<Post>(this.urlId).pipe(
      tap((post) => {
        console.log(post);
      })
    );
  }
  //añadir un post

  addPost(post: Post) {
    return this.httpClient.put(`${this.url}`, post);
  }
  //borrar un post

  deletePost(id: number) {
    this.urlId = this.url + '/' + id;
    // console.log(this.urlId);
    return this.httpClient.delete(this.urlId).subscribe({
      next: () => console.log('Borrado'),
    });
  }

  //editar un post

  editPostById(postEditado: Post, id: number) {
    return this.httpClient.patch(`${this.url}+${id}`, postEditado).pipe(
      tap(() => {
        console.log('editado');
      })
    );
  }
}
