import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import PokemonFiche from "./components/PokemonFiche";


function App() {

    return (
        <>
            <PokemonFiche name="lucario"/>
            <PokemonFiche name="pikachu"/>
        </>
    );
}

export default App;

