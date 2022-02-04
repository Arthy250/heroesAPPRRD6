import { heroes } from "../../data/HeroesData";

export const getHeroesbyName = (name= '') => {
    if ( name.length === 0){
        return [];
    }

    name = name.toLowerCase();
    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name));
}
