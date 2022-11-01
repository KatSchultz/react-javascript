import axios from "axios";
import { config } from "../config/index";

export function callApi() {
  return axios
    .get("https://api.harvardartmuseums.org/image?", {
      params: {
        apikey: config.apikey,
      },
    })
    .then((response) => response);
}

export function getColors() {
  return axios
    .get("https://api.harvardartmuseums.org/color?", {
      params: {
        apikey: config.apikey,
      },
    })
    .then((response) => response);
}

export function getPokemon(name) {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response);
}

export function getPokemonByColor(color) {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon-color/${color}`)
    .then((response) => response);
}
