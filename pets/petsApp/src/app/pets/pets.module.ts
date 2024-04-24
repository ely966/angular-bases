import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
import { DetailsCatComponent } from './pages/details-cat/details-cat.component';
import { ShowPetsComponent } from './pages/show-pets/show-pets.component';
import { PetsRoutingModule } from './pets-routing.module';
@NgModule({
  declarations: [
    ListComponent,
    TableComponent,
    DetailsComponent,
    ShowPetsComponent,
    DetailsCatComponent,
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatPaginator,
    MatCardModule,
    MatInputModule /*Si te dice algun error de matFormFielControl*/,
    TranslateModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
  ],
})
export class PetsModule {}
