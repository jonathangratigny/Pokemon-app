import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../class/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.css']
})
export class DetailsPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
   )
   { }


  ngOnInit(): void {
    const pokemonId: number = Number(this.route.snapshot.params['id'])
    if (pokemonId) {
      this.pokemonService.getPokemonById(pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    }
  }

  deletePokemon(pokemon: Pokemon): void {
    this.pokemonService.deletePokemonById(pokemon.id).subscribe(() => this.goToPokemonList());
  }

  goToPokemonList(): void {
this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon): void {
    this.router.navigate(['/edit/pokemon', this.pokemon?.id]);
  }
  formatId(id: number): string {
    return `#${id.toString().padStart(4, '0')}`;
  }
}
