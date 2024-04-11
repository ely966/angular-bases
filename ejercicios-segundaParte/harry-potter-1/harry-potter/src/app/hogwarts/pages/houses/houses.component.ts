import { Component, inject, OnInit } from '@angular/core';
import { House } from '../../interfaces/house.interface';
import { ApiHogwartsService } from '../../services/api-hogwarts.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.css',
})
export class HousesComponent implements OnInit {
  /*Title of page*/
  titleHouse: string = 'HOUSES';
  //Title of table
  headersHouses: string[] = [
    'house',
    'emoji',
    'founder',
    'colors',
    'animal',
    'index',
  ];
  constructor() {}
  //Data for table
  houses: House[] = [];
  //Connection with service
  private apiHogwartsService1 =
    inject(ApiHogwartsService); /*Conexión con el servicio*/

  ngOnInit(): void {
    this.getHouses();
  }

  /*Receiver the books*/
  getHouses() {
    this.apiHogwartsService1.getHouses().subscribe({
      next: (housesReceiver) => {
        this.houses = housesReceiver;
      },
    });
  }
}
