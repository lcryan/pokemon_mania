import React from 'react';


function PokemonFiche({pokemonData}) {

    return (
        <>

            {Object.keys(pokemonData).length > 0 &&
            <>
                <h2>{pokemonData.data.name} </h2>
                <img src={pokemonData.data.sprites.front_default}/>
                <ul>
                    His main abilities are:

                    {pokemonData.data.abilities.map((a) => {
                        return <li key={a.ability.name}> {a.ability.name}</li>
                    })}
                </ul>
                <p>{pokemonData.data.name}'s weight is {pokemonData.data.weight}</p>
                <p>He has {pokemonData.data.moves.length} moves! Wow! </p>
            </>

            }
        </>

    );
}

export default PokemonFiche;