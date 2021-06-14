import Home from "@pages/Home";
import Detail from "@pages/Detail";
import MyPokemon from "@pages/MyPokemon";

import Pokedex from '@assets/pokedex.png';
import Storage from '@assets/storage.png';

const routingList = [
    {
        path: "/",
        component: Home,
        isExact: true,
        key: "Pokédex",
        isNavShown: true,
        image: Pokedex
    },
    {
        path: "/my-pokemon",
        component: MyPokemon,
        isExact: true,
        key: "My Pokémon",
        isNavShown: true,
        image: Storage
    },
    {
        path: "/pokemon/:name",
        component: Detail,
        isExact: false,
        key: "Details",
        isNavShown: false
    }
];

export default routingList;