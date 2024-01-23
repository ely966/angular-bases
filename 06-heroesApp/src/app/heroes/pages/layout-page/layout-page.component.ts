import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../auth/interfaces/user.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css',
})
export class LayoutPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['/auth/login']);
  }
  get user(): User | undefined {
    return this.authService.currentUser;
  }
}
