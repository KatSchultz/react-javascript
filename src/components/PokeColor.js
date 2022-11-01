import React, { useState } from "react";
import { getPokemonByColor } from "../services/api.service";

export default function PokeColor() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState([]);

  function changeHandler(e) {
    setInput(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    getPokemonByColor(input).then((response) => {
      setPokemon(response.data);
      console.log(response.data);
      return response;
    });
  }

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input type="text" placeholder="Color" onChange={changeHandler} />
        <button>Search by Color</button>
      </form>
    </div>
  );
}
