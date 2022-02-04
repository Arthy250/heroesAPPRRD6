import { heroes } from "../../data/HeroesData";

export const getHeroesById = ( id = '' ) => {
    return heroes.find( hero => hero.id === id );
}
