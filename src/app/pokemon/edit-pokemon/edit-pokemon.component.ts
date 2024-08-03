import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../class/pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrl: './edit-pokemon.component.css'
})

export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {

    const pokemonId: number = Number(this.activatedRoute.snapshot.params['id']);
    if (pokemonId) {
      this.pokemonService.getPokemonById(pokemonId).subscribe(pokemon => this.pokemon = pokemon);

    }
  }
}
