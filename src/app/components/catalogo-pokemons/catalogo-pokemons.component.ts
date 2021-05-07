import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-catalogo-pokemons',
  templateUrl: './catalogo-pokemons.component.html',
  styleUrls: ['./catalogo-pokemons.component.css']
})
export class CatalogoPokemonsComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  pokemonsData: any[] = [];
  page = 1;
  totalPokemons: number;
  offset: number;
  limitItemOnPage = 20;
  value = '';

  search = new FormControl(' ');

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.offset = (this.page * this.limitItemOnPage) - this.limitItemOnPage;
    this.dataService.getCatalogo(this.limitItemOnPage, this.offset)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach(result => {
          this.dataService.getPokemonData(result.url)
            .subscribe((respo: any) => {
              this.pokemonsData.push(respo);
              this.pokemonsData.sort((a, b) => a.id > b.id ? 1 : -1);
            });
        });
      });
  }

  verPokemon(id: string): void {
    this.router.navigate( ['/pokemon', id] );
  }
}
