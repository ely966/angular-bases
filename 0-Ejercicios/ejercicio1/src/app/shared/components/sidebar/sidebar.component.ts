import { Component, OnInit } from '@angular/core';
import { User } from '../../../auth/interfaces/user.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  //userLogeado: User | null = null;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.checkUser();
  }

  //Comprobar si el boton debe mostrarse
  checkUser(): User | null {
    //console.log(this.authService.getLocalStorage());
    if (!this.authService.getLocalStorage()) return null;
    return this.authService.getLocalStorage();
  }
  logOut() {
    this.authService.logOut();
  }
}
