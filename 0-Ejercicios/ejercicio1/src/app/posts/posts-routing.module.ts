import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {
    //mostrar tabla con los post
    path: '',
    component: PostComponent,
    pathMatch: 'full',
  },
  {
    //mostrar detalles de un post
    //http://localhost:4200/posts/post/1
    path: ':id',
    component: PostDetailsComponent,
  },
  {
    //AÑADIR POST
    path: 'addPost',
    component: AddPostComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
