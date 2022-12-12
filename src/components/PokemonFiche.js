import React, {useEffect, useState} from 'react';
import axios from "axios";


function PokemonFiche({name}) {

    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        async function getOnePokemon() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                console.log(response);
                setPokemonData(response);
            } catch (e) {
                console.error(e)
            }
        }

        getOnePokemon();
    }, [])
    return (
        <>
            {Object.keys(pokemonData).length > 0 &&
            <>

                <article className="pokemon-fiche">
                <h2>{pokemonData.data.name} </h2>
                <img src={pokemonData.data.sprites.front_default}/>
                    <p><strong>Weight</strong> {pokemonData.data.weight}</p>
                <p><strong>Moves</strong> {pokemonData.data.moves.length} </p>
                    <ul>
                        <strong>Abilities</strong>
                        {pokemonData.data.abilities.map((a) => {
                            return <li key={a.ability.name}> {a.ability.name}</li>
                        })}
                    </ul>
                </article>

            </>
            }
        </>
    );
}

export default PokemonFiche;