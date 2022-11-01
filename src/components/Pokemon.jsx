import React, { useEffect, useState } from "react";
import { getPokemon } from "../services/api.service";
import "./Pokemon.css";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    getPokemon("squirtle").then((response) => {
      console.log(response.data);
      setPokemon(response.data);
      return response;
    });
  }, []);

  function changeHandler(e) {
    let caseFix = e.target.value.toLowerCase();
    setUserInput(caseFix);
  }

  function submitHandler(e) {
    e.preventDefault();

    getPokemon(userInput).then((response) => {
      setPokemon(response.data);
    });
  }

  return (
    <div className="pokemon">
      <h2>Pokemon Calls</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search Pokemon"
          onChange={changeHandler}
        />
        <button>Search</button>
      </form>
      {pokemon.sprites?.front_default && (
        <img src={pokemon.sprites?.front_default} alt="" />
      )}
      {/* <img src={pokemon.sprites.front_default} alt="" /> */}
    </div>
  );
}
