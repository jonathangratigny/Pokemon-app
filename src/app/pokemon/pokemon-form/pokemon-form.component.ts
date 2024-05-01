import { Component, Input, OnInit, Pipe } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../class/pokemon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;

  types: string[];

  constructor(
    private pokemonService: PokemonService, 
    private router: Router) { }
  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypes();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string): void {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      if (index >= 0) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }
    onSubmit() {
      console.log('Submit');
      this.router.navigate(['/pokemon', this.pokemon.id]);
    }
  }
