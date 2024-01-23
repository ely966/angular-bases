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

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    PostComponent,
    PostDetailsComponent,
    FormularioPostComponent,
    AddPostComponent,
  ],
  imports: [CommonModule, PostsRoutingModule, ReactiveFormsModule],
  exports: [HomeComponent],
})
export class PostsModule {}
