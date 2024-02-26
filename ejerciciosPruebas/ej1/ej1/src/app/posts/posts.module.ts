import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormularioPostComponent } from './component/formulario-post/formulario-post.component';
import { ListComponent } from './component/list/list.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostEditComponent } from './pages/post-edit/post-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PostHomeComponent } from './pages/post-home/post-home.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [
    PostDetailsComponent,
    PostListComponent,
    PostEditComponent,
    ListComponent,
    FormularioPostComponent,
    PostHomeComponent,
  ],
  imports: [CommonModule, PostsRoutingModule, ReactiveFormsModule],
})
export class PostsModule {}
