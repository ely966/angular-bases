import { TestBed } from '@angular/core/testing';

import { ApiHogwartsService } from './api-hogwarts.service';

describe('ApiHogwartsService', () => {
  let service: ApiHogwartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHogwartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
