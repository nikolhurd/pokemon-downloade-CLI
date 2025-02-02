import inquirer from "inquirer";
import fs from "fs/promises";
import path from "path";
import { opendir } from "fs";

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

  saveStats(pokemonName, statString);
};

const saveStats = async (pokemonName, statString) => {
  const pokemonDirectory = path.join(`./${pokemonName}`, "stats.txt");
  await fs.writeFile(pokemonDirectory, statString);
};

function getSprites(pokemonName, jsonData) {
  console.log("Sprites");
}

const getArtwork = async (pokemonName, jsonData) => {
  const pokemonObject = await jsonData;
  const artworkURL =
    pokemonObject.sprites.other["official-artwork"].front_default;
  const response = await fetch(artworkURL);
  const pokemonArtwork = await response.arrayBuffer();
  const buffer = Buffer.from(pokemonArtwork);

  const pokemonDirectory = path.join(
    `./${pokemonName}`,
    "original-artwork.png"
  );
  await fs.writeFile(pokemonDirectory, buffer);
};

const createFolder = async (pokemonName) => {
  const folderExists = await folderCheck(pokemonName);
  if (!folderExists) {
    await fs.mkdir(`./${pokemonName}`);
  } else {
    console.log("Folder already exists");
  }
};

const folderCheck = async (pokemonName) => {
  try {
    await fs.access(`./${pokemonName}`);
    return true;
  } catch {
    return false;
  }
};
