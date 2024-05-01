import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonPipeColor'
})
export class PokemonPipeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string = '';

    switch (type) {
      case 'Fire':
        color = 'red lighten-2';
        break;
      case 'Water':
        color = 'blue lighten-1';
        break;
      case 'Grass':
        color = 'green lighten-1';
        break;
      case 'Electric':
        color = 'yellow lighten-1';
        break;
      case 'Rock':
        color = 'brown lighten-1 white-text';
        break;
      case 'Ground':
        color = 'orange lighten-1';
        break;
      case 'Bug':
        color = 'green lighten-1';
        break;
      case 'Dragon':
        color = 'purple lighten-1';
        break;
      case 'Ghost':
        color = 'black lighten-1 white-text';
        break;
      case 'Dark':
        color = 'black lighten-1 white-text';
        break;
      case 'Fairy':
        color = 'pink lighten-1';
        break;
      case 'Fighting':
        color = 'brown lighten-1 white-text';
        break;
      case 'Normal':
        color = 'blue-grey darken-4 white-text';
        break;
      case 'Poison':
        color = 'purple darken-4 white-text';
        break;
      case 'Psychic':
        color = 'deep-purple lighten-1 white-text';
        break;
      case 'Steel':
        color = 'grey darken-1 white-text';
        break;
      case 'Ice':
        color = 'light-blue lighten-1';
        break;
      case 'Flying':
        color = 'light-green lighten-1';
        break;
      case 'ice':
        color = 'light-blue lighten-1';
        break;


      default:
        break;
    }
    return 'chip ' + color;
  }

}
