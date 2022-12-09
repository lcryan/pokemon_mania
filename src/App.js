import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import PokemonFiche from "./components/PokemonFiche";
import Pagination from "./components/Pagination";

function App() {

    const [pokemonArray, setPokemonArray] = useState([]);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const[nextPage, setNextPage] = useState("");
    const [previousPage, setPreviousPage] = useState("");
    const[loading, setLoading] = useState(true); /*our application is loading! Within this we need info for user */


    useEffect(() => {
        async function fetchEmAll() {

            try {
                setLoading(true);
                const response = await axios.get(currentPage);
                console.log(response)
                setLoading(false); //here we are NOT!! loading anything by default, as we are setting the other pages//
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

    function toTheNextPage() {
        setCurrentPage(nextPage)
    }

    function toThePreviousPage() {
        setCurrentPage(previousPage)
    }

    return (
        <>
            <Pagination
            toTheNextPage={nextPage ? toTheNextPage : null}
            toThePreviousPage={previousPage ? toThePreviousPage : null}
            />
            {pokemonArray.map((pokemon) => {
                return <PokemonFiche name={pokemon.name}/>
            })}
        </>
    );
}

export default App;

