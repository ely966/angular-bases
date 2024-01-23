import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPjComponent } from './tabla-pj.component';

describe('TablaPjComponent', () => {
  let component: TablaPjComponent;
  let fixture: ComponentFixture<TablaPjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaPjComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
