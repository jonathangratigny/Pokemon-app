import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokeminId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == Number(pokeminId));

    if (pokemon) {
      console.log(`Pokemon selected: ${this.pokemonSelected?.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log('Pokemon not found');
      this.pokemonSelected = undefined;
    }

  }
}
