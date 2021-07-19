import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonSearch, setPokemonSearch] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((resp) => resp.json())
      .then(setPokemon)
  }, [])

  function handleAddPokemon(addNewPokemon) {
    setPokemon([...pokemon, addNewPokemon])
  }

  const pokemonRendered = pokemon.filter((poke) => 
    poke.name.toLowerCase().includes(pokemonSearch.toLowerCase())
  )
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        onAddPokemon={handleAddPokemon}
      />
      <br />
      <Search 
        pokemonSearch={pokemonSearch}
        onChangePokemonSearch={setPokemonSearch}
      />
      <br />
      <PokemonCollection 
        pokemon={pokemonRendered}
      />
    </Container>
  );
}

export default PokemonPage;
