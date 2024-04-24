import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../../interfaces/cat.interface';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-details-cat',
  templateUrl: './details-cat.component.html',
  styleUrl: './details-cat.component.css',
})
export class DetailsCatComponent implements OnInit {
  idCat: String = ''; //id de l animal
  typePets: String = 'cat'; //indicar el tipo de animal
  private activatedRoute = inject(ActivatedRoute);
  private petsService = inject(PetsService);
  datasCat: Cat = {
    id: '',
    name: '',
    temperament: '',
    origin: '',
    weight: { imperial: '', metric: '' },
    description: '',
    life_span: '',
    alt_names: '',
    hairless: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: '',
    hypoallergenic: 0,
    reference_image_id: '',
  };

  ngOnInit(): void {
    this.idCat = this.activatedRoute.snapshot.params['id'];

    this.returnDataCat(this.idCat);

    //ahora tengo acceso a todos los parametos de la url, como un observable
    //switchMap me permite recoger esos params y destructurarlo apr arecoger el id
    //   this.activatedRoute.params.pipe(
    //     delay(3000), //vaya mas despacio y ver el mensaje de espera
    //     switchMap(({ id }) => this.petsService.getCatByID(id))
    //   );
  }

  //Del id string que recibimos, devolvemos todo los datos del gato
  returnDataCat(id: String) {
    this.petsService.getCatByID(id).subscribe({
      next: (catReceiver) => {
        this.datasCat = catReceiver;
        console.log(this.datasCat);
      },
    });
  }
}
