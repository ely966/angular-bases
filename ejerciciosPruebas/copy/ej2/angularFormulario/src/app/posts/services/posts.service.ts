import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService implements OnInit {
  //Guardar los post
  public posts: Post[] = [];
  private url: string = 'https://jsonplaceholder.typicode.com/todos'; //para todas las busquedad. Url
  private urlId: string = ''; //Para buscar por id, se le añadira luego la variable url + id
  private urll: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    console.log('Servi');
  }

  /*Recoger todos los postS*/

  recogerPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url).pipe(
      tap((post) => {
        this.posts = post;
      })
    );
  }

  addPost(post: Post) {
    return this.httpClient
      .post<Post>(this.url, post)
      .pipe(tap(this.recogerPost));
  }

  /*Recoger un post por id*/

  recogerPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.url + '/' + id).pipe(
      tap((post) => {
        console.log(post);
      })
    );
  }

  /*===================*/
  /*Añadir POst*/

  /*=======================*/
  /*Editar POst*/

  //Editar
  editPost(postEditado: Post, idPost: number) {
    console.log('Editado');
    return this.httpClient
      .patch(`${this.url}/${idPost}`, postEditado)
      .pipe(tap());
  }

  /*========================*/

  /*Borrar post*/
  deleteById(id: number): Observable<Object> {
    // return this.httpClient.delete('this.url' + id).pipe(
    //   {}
    // )
    const idPost = id.toString();
    return this.httpClient.delete(`${this.url}/${idPost}`).pipe(
      tap(() => {
        console.log('Borrado');
      })
    );
    //   {
    //   next: () => {
    //     console.log('Borrado');
    //   },
    //   error(err) {
    //     console.log(err);
    //   },
    // });
  }
}
