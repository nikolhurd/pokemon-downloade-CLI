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
  createFolder(pokemonName);
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

const getStats = async (pokemonName, jsonData) => {
  const pokemonObject = await jsonData;
  const pokemonStat = pokemonObject.stats;

  let statString = "";
  pokemonStat.forEach((stat) => {
    statString += `${stat.stat.name} : ${stat.base_stat}\n`;
  });
};

function getSprites(pokemonName, jsonData) {
  console.log("Sprites");
}

const getArtwork = (pokemonName, jsonData) => {
  console.log("Artwork");
};

const createFolder = async (pokemonName) => {
  folderCheck(pokemonName);
  await fs.mkdir(`./${pokemonName}`);
};

const folderCheck = async (pokemonName) => {
  try {
    return await fs.access(`./${pokemonName}`);
  } catch {
    console.log("folder already exists");
  }
};
