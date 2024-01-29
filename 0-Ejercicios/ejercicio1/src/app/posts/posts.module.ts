import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioPostComponent } from './components/formulario-post/formulario-post.component';
import { ListComponent } from './components/list/list.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { HomeComponent } from './pages/home/home.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostComponent } from './pages/post/post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { EditPostComponent } from './pages/edit-post/edit-post.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    PostComponent,
    PostDetailsComponent,
    FormularioPostComponent,
    AddPostComponent,
    EditPostComponent,
  ],
  imports: [CommonModule, PostsRoutingModule, ReactiveFormsModule],
  exports: [HomeComponent],
})
export class PostsModule {}
