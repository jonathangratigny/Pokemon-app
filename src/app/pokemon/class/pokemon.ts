export class Pokemon {

    id: number;
    name: string;
    hp: number;
    cp: number;
    picture: string;
    types: string[];
    created: Date;

    constructor(
        name: string = 'Choisir un pokemon',
        hp: number = 1,
        cp: number = 1,
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
        types: string[] = ['Normal'],
        created: Date = new Date()
    ) {
        this.name = name;
        this.hp = hp;
        this.cp = cp;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}