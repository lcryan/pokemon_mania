import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import PokemonFiche from "./components/PokemonFiche";


function App() {

    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        async function getOnePokemon() {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/lucario");
                console.log(response);
                setPokemonData(response);
            } catch (e) {
                console.error(e)
            }
        }

        getOnePokemon();
    })

    return (
        <PokemonFiche pokemonData={pokemonData}/>

    );
}

export default App;

