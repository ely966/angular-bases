import { Component } from '@angular/core';
import { MenuItem } from '../../interface/menuItem.interface';

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  public reactiveMneu: MenuItem[] = [
    {
      title: 'Basico',
      route: './reactive/basic',
    },
    {
      title: 'Dinamicos',
      route: './reactive/dynamic',
    },
    {
      title: 'Switches',
      route: './reactive/switches',
    },
  ];

  public authMenu: MenuItem[] = [
    {
      title: 'Registro',
      route: './auth',
    },
  ];
}
