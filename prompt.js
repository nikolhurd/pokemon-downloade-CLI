import inquirer from "inquirer";
import fs from "fs/promises";
import path from "path";

const promptUser = () => {
  const questions = [
    {
      type: "input",
      name: "pokemonName",
      message: "Pokemon name",
    },
    {
      type: "checkbox",
      name: "pokemonInfo",
      message: "Pokemon info to download",
      choices: [{ name: "Stats" }, { name: "Sprites" }, { name: "Artwork" }],
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    fetchPokemon(answers);
  });
};

promptUser();

const fetchPokemon = (answers) => {
  const pokemonName = answers.pokemonName;
  const response = fetch(
    "https://pokeapi.co/api/v2/pokemon/" + `${pokemonName}`
  );
  response
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
      selectedInfo(pokemonName, jsonData, answers);
    });
};

const selectedInfo = (pokemonName, jsonData, answers) => {
  answers.pokemonInfo.forEach((element) => {
    switch (element) {
      case "Stats":
        getStats(pokemonName, jsonData);
        break;
      case "Sprites":
        getSprites(pokemonName, jsonData);
        break;
      case "Artwork":
        getArtwork(pokemonName, jsonData);
        break;

      default:
        break;
    }
  });
};

const getStats = (pokemonName, jsonData) => {
  console.log("Stats");
};
const getSprites = (pokemonName, jsonData) => {
  console.log("Sprites");
};
const getArtwork = (pokemonName, jsonData) => {
  console.log("Artwork");
};
