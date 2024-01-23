import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'HeroesApp';
  //aqui porque siempre pasa por aqui

  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    this.authService.checkAuthentication().subscribe(() => {
      console.log('checkAuthentication finished');
    });
  }
}
