import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostEditComponent } from './pages/post-edit/post-edit.component';
import { PostListComponent } from './pages/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    pathMatch: 'full',
  },

  {
    path: 'edit/:id',
    component: PostEditComponent,
  },
  {
    //mostrar detalles de un post
    //http://localhost:4200/posts/post/1
    // path: 'detail/:id',
    path: ':id',
    component: PostDetailsComponent,
  },
  //mostrar detalles de un post
  //http://localhost:4200/posts/post/1
  {
    path: '**',
    // component: PostListComponent,
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
