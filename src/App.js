import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import PokemonFiche from "./components/PokemonFiche";

function App() {

    const [pokemonArray, setPokemonArray] = useState([]);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const[nextPage, setNextPage] = useState();
    const [previousPage, setPreviousPage] = useState();
    const[loading, setLoading] = useState(true); /*our application is loading! Within this we need info for user */

    useEffect(() => {
        async function fetchEmAll() {

            try {

                setLoading(true); //automatically loads to the current page?//
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
                console.log(response)
                setLoading(false); //here we are NOT!! loading anything by default, ass we are setting the other pages//
                setPokemonArray(response.data.results);
                setNextPage(response.data.next)
                setPreviousPage(response.data.previous)
            } catch (e) {
                console.log(e)
            }
        }

        fetchEmAll();
    }, [currentPage])

    if (loading) return "Currently fetching some pokemon...just a second"


    return (
        <>
            <button type="button" name="previous">previous</button>
            <button type="button" name="next" >next</button>
            {pokemonArray.map((pokemon) => {
                return <PokemonFiche name={pokemon.name}/>
            })}
        </>
    );
}

export default App;

