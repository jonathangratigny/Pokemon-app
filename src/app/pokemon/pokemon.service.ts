import { Injectable } from '@angular/core';
import { Pokemon } from './class/pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable() // {providedIn: 'root'} de base 'arrose' toute l'application donc on injecte que dans le module concerné
export class PokemonService {

  public getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  public getPokemonById(pokemonId: number): Pokemon | undefined {
    const pokemons: Pokemon[] = this.getPokemonList();

    return pokemons.find(pokemon => pokemon.id === pokemonId);
  }

  public getPokemonTypes(): string[] {
    return [...new Set(this.getPokemonList().map(pokemon => pokemon.types[0]))];
  }
}