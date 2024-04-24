import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from '../../pets/interfaces/cat.interface';
import { PetsService } from '../../pets/services/pets.service';

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrl: './sidebar-right.component.css',
})
export class SidebarRightComponent implements OnInit {
  cats: Cat[] = [];
  petsServices = inject(PetsService);
  private router = inject(Router);
  ngOnInit(): void {
    this.returnCat();
  }

  returnCat() {
    this.petsServices.getCatLimit().subscribe({
      next: (catsReceiver) => {
        this.cats = catsReceiver;
        console.log(this.cats);
      },
    });
  }

  /*Clikear una fila de la tabla te redirige a los detalles*/
  detailsPet(cat: any) {
    // console.log(cat);
    // this.router.navigate([':' + cat]);
    this.router.navigate(['../cat/', cat]);
  }
}
