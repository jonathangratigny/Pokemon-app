import { Component, Inject, IterableDiffers, OnInit } from '@angular/core';
import { Pokemon } from '../class/pokemon';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
  ngOnInit(): void {
    this.pokemons$.subscribe((pokemons: Pokemon[]) => this.pokemons = pokemons);
  }

  private _router = Inject(Router);
  public get router() {
    return this._router;
  }
  public set router(value) {
    this._router = value;
  }


  protected searchTerms = new Subject<string>();
  protected pokemons: Pokemon[] = [];
  pokemons$: Observable<Pokemon[]>;

  search(term: string) {
    console.log('term', term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    console.log('link', link);
  }
}
