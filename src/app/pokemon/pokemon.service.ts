import { Inject, Injectable } from '@angular/core';
import { Pokemon } from './class/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable() // {providedIn: 'root'} de base 'arrose' toute l'application donc on injecte que dans le module concerné
export class PokemonService {

  constructor(private _http: HttpClient) { }
  public getPokemonList(): Observable<Pokemon[]> {
    return this._http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => {
        this.handleError(error, null)
        return of([]);
      })
    );
  }

  public updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: { 'Content-Type': 'application/json', },
    }
    return this._http.put<Pokemon>(`api/pokemons/`, pokemon, httpOptions)
      .pipe(tap((res) => this.log(res)),
        catchError((error) => this.handleError(error, null)
        ))
  }

  public deletePokemonById(pokemonId: number): Observable<null> {
    return this._http.delete<Pokemon>(`api/pokemons/${pokemonId}`)
      .pipe(tap((res) => this.log(res)),
        catchError((error) => this.handleError(error, null)
        ))
  }

  public getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this._http.get<Pokemon>(`api/pokemons/${pokemonId}`)
      .pipe(tap((pokemon) => this.log(pokemon)),
        catchError((error) => {
          this.handleError(error, undefined)
          return of(undefined)
        })
      )
  }

  public addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: { 'Content-Type': 'application/json', },
    }
    return this._http.post<Pokemon>('api/pokemons', pokemon, httpOptions)
      .pipe(tap((pokemon) => this.log(pokemon)),
        catchError((error) => this.handleError(error, null)
        ))
  }


  private log(response: any) {
    console.table(response)
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error)
    return of(errorValue)
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {
    return this._http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) =>
        this.handleError(error, []))
    )
  }

  public getPokemonTypes(): string[] {
    const types: string[] = [];
    this.getPokemonList().subscribe(pokemonList => {
      for (const pokemon of pokemonList) {
        if (!types.includes(pokemon.types[0])) {
          types.push(pokemon.types[0]);
        }
      }
    });
    return types;
  }


}