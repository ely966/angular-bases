import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    pathMatch: 'full',
  },

  {
    path: 'edit/:id',
    component: EditPostComponent,
  },
  {
    path: 'addPost',
    component: AddPostComponent,
  },
  {
    /*POner al final para que no se bugee*/

    path: ':id',
    component: PostDetailsComponent,
  },
  {
    path: '**',
    redirectTo: 'addPost',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
