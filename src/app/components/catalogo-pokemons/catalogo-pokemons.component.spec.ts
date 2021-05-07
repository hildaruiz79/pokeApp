import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPokemonsComponent } from './catalogo-pokemons.component';

describe('CatalogoPokemonsComponent', () => {
  let component: CatalogoPokemonsComponent;
  let fixture: ComponentFixture<CatalogoPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
