import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../../interfaces/cat.interface';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  @Input() private idPet: String = '';
  private activatedRoute = inject(ActivatedRoute);
  private petsService = inject(PetsService);
  @Input() typePet: String = '';
  @Input() datasCat: Cat = {
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
  /*Id del cat recibido*/
  constructor() {}
  ngOnInit(): void {}

  returnInfoCat() {}
}
