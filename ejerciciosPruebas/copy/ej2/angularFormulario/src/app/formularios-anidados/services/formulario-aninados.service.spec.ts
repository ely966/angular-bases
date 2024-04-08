import { TestBed } from '@angular/core/testing';

import { FormularioAninadosService } from './formulario-aninados.service';

describe('FormularioAninadosService', () => {
  let service: FormularioAninadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioAninadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
