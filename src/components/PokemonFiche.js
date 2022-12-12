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
<section className="pokemon-card-box">
                <article className="pokemon-fiche">
                    <h2>{pokemonData.data.name} </h2>
                    <img src={pokemonData.data.sprites.front_default}/>
                    <p><strong>Moves</strong> {pokemonData.data.moves.length} </p>
                    <p><strong>Weight:</strong> {pokemonData.data.weight}</p>
                    <strong>Abilities:</strong>
                    <ul>
                        {pokemonData.data.abilities.map((a) => {
                            return <li key={a.ability.name}> {a.ability.name}</li>
                        })}
                    </ul>
                </article>
</section>
            </>
            }
        </>
    );
}

export default PokemonFiche;