import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  logeado: boolean = false;
  //userLogeado: User | null = null;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.checkUser();
  }

  //Comprobar si el boton debe mostrarse
  checkUser() {
    //console.log(this.authService.getLocalStorage());
    // if (!this.authService.getLocalStorage()) return null;
    if (!this.authService.getLocalStorage()) {
      this.logeado = false;
    } else {
      this.logeado = true;
    }
  }
  logOut() {
    this.authService.logOut();
    //this.checkUser();
  }
}
