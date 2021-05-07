import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CatalogoPokemonsComponent } from '../catalogo-pokemons/catalogo-pokemons.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }
}
