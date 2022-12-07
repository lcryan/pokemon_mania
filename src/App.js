import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";



function App() {

    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {

        async function fetchPokemon() {

            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/jigglypuff`);
                console.log(response);
                setPokemonData(response);
            } catch
                (e) {
                console.error(e);
            }
        }

        fetchPokemon();

    }, []);


    return (
        <>
            <h2>This is {pokemonData.data.name} </h2>
            <img src={pokemonData.data.sprites.front_default}/>
            <ul>
                {pokemonData.data.abilities.map((a) => {
                    return <li key={a.ability.name}>{a.ability.name} </li>
                })}

            </ul>
            <p>{pokemonData.data.name}'s weight is {pokemonData.data.weight}</p>
            <p>He can do {pokemonData.data.moves.length} moves! WOW!</p>
        </>
    );
}


export default App;
