import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegionsComponent } from './lista-regions.component';

describe('ListaRegionsComponent', () => {
  let component: ListaRegionsComponent;
  let fixture: ComponentFixture<ListaRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaRegionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
