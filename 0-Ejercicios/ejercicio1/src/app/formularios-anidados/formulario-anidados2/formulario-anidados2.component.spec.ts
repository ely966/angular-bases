import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAnidados2Component } from './formulario-anidados2.component';

describe('FormularioAnidados2Component', () => {
  let component: FormularioAnidados2Component;
  let fixture: ComponentFixture<FormularioAnidados2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioAnidados2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioAnidados2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
