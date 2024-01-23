import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login('fernando@gmail.com', '123').subscribe((user) => {
      this.router.navigate(['/heroes/list']);
    });
  }
}
