import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [SidebarComponent, HeaderComponent, SidebarRightComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterLink,
    TranslateModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [SidebarComponent, HeaderComponent, SidebarRightComponent],
})
export class SharedModule {}
