import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURLpokemon = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCatalogo(limit: number, offset: number){
    return this.http.get(`${this.baseURLpokemon}?offset=${offset}&limit=${limit}`);
  }

  getPokemonData(urlPokemon: string){
    return this.http.get(urlPokemon);
  }

  getPokemon(id: string) {
    return this.http.get(`${this.baseURLpokemon}/${id}/`);
  }

  getPokemonAbilities(urlAbility: string) {
    console.log('URLHabilidad', urlAbility);
    return this.http.get(urlAbility);
  }
}
