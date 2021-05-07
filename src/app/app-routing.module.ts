import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoPokemonsComponent } from './components/catalogo-pokemons/catalogo-pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {path: 'catalogo', component: CatalogoPokemonsComponent},
  {path: 'pokemon/:id', component: PokemonComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: '', redirectTo: 'catalogo', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
