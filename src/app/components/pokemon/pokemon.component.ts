import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  pokemon: any = [];
  pokemonAbilities: any[];
  pokemonTypes: any[];
  pokemonStats: any[];

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, router: Router) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.dataService.getPokemon(params.get('id'))
        .subscribe((response: any) => {
          this.pokemon.push(response);
          this.pokemonTypes = response.types;
          this.pokemonAbilities = response.abilities;
          this.pokemonStats = response.stats;
          console.log(this.pokemon);
          console.log('Stats', this.pokemonStats);
        });
      }
    });
  }

}
