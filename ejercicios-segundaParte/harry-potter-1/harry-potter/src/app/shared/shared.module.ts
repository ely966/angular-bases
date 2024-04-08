import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
  ],
  exports: [SidebarComponent, HeaderComponent],
})
export class SharedModule {}
