import { Component, OnInit, inject } from '@angular/core';
import { Cat } from '../../interfaces/cat.interface';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-show-pets',
  templateUrl: './show-pets.component.html',
  styleUrl: './show-pets.component.css',
})
export class ShowPetsComponent implements OnInit {
  cats: Cat[] = [];
  categorys: string[] = [
    'id',

    'name',
    'temperament',
    'origin',
    'weight',
    'description',
    'life_span',
    'alt_names',
    // intelligence: number;
    // social_needs: number;
    // stranger_friendly: number;
    // experimental: number;
    'hairless',
    'suppressed_tail',
    'short_legs',
    'wikipedia_url',
    'hypoallergenic',
    'reference_image_id',
  ];
  ngOnInit(): void {
    this.returnCat();
  }

  petsServices = inject(PetsService);
  // "https://cdn2.thecatapi.com/images/{{
  //   row['reference_image_id']
  // }}.jpg"
  returnCat() {
    this.petsServices.getCat().subscribe({
      next: (catsReceiver) => {
        this.cats = catsReceiver;
      },
    });
  }
  addImagen() {
    this.cats.forEach((cat) => {
      const idCatImagen = cat.reference_image_id;
      //cat/id=
    });
  }
}
