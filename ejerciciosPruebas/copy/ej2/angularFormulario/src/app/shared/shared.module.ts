import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CheckErrorsComponent } from './check-errors/check-errors.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    CheckErrorsComponent,
  ],
  imports: [CommonModule, RouterLink, HttpClientModule, ReactiveFormsModule],
  exports: [
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    CheckErrorsComponent,
  ],
})
export class SharedModule {}
