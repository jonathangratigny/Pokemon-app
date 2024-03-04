import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonPipeColor'
})
export class PokemonPipeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string = '';

    switch (type) {
      case 'Fire':
        color = 'red lighten-1';
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
        color = 'brown lighten-1';
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
        color = 'black lighten-1';
        break;
      case 'Dark':
        color = 'black lighten-1';
        break;
      case 'Fairy':
        color = 'pink lighten-1';
        break;
      case 'Fighting':
        color = 'brown lighten-1';
        break;
      case 'Normal':
        color = 'grey lighten-1';
        break;

      default:
        break;
    }
    return 'chip ' + color;
  }

}
