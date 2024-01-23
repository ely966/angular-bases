import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  //Guardar los post
  public posts: Post[] = [];
  private url: string = 'https://jsonplaceholder.typicode.com/todos'; //para todas las busquedad. Url
  private urlId: string = ''; //Para buscar por id, se le añadira luego la variable url + id

  constructor(private httpClient: HttpClient) {
    console.log('iniciando servicio');
  }

  //_------------------------

  //Recoger datos de la api

  getPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url).pipe(
      tap((postRecibidos) => (this.posts = postRecibidos))
      //catchError ((error) =>  )
    );
  }

  getPostsList(): Post[] {
    this.getPost();
    return this.posts;
  }

  //llega el id para mostrar detalles en la pantalla.
  //NEcesitamos los datos del post por su id. Devolvera un observable, un objeto con forma de posyt
  getPostById(idPost: string): Observable<Post> {
    //this.http. get<lo que devolvera> (url donde mandarlo / id)
    //this.urlId = 'https://jsonplaceholder.typicode.com/todos/' + idPost;
    this.urlId = this.url + '/' + idPost;
    return this.httpClient.get<Post>(this.urlId).pipe(
      tap((post) => {
        console.log(post);
      })
    );
  }

  //AddPost

  addPost(post: Post) {
    // return this.httpClient.put(this.url, post).pipe(tap());
    return this.httpClient.post<Post>(this.url, post).pipe(tap(this.getPost()));
  }
}
