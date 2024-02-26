import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [
    FormularioComponent,
    ListaComponent,
    PostsListComponent,
    PostDetailsComponent,
    EditPostComponent,
    AddPostComponent,
  ],
  imports: [CommonModule, PostsRoutingModule, ReactiveFormsModule],
})
export class PostsModule {}
