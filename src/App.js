import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";



function App() {

const [pokemonArray, setPokemonArray] = useState([]);

useEffect(()=>{
    async function fetchEmAll() {

        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
            console.log(response)
            setPokemonArray(response.data.results);
        } catch (e) {
            console.log(e)
        }
    }
    fetchEmAll();
})
    return (
        <>
         <ul>

             {pokemonArray.map((pokemonFiche) => {
                 return <li>{pokemonFiche.name}</li>
             })}

        </ul>

</>
    );
}

export default App;

