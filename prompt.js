import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "pokemon-name",
    message: "Pokemon name",
  },
  {
    type: "checkbox",
    name: "pokemon-info",
    message: "Pokemon info to download",
    choices: [{ name: "Stats" }, { name: "Sprites" }, { name: "Artwork" }],
  },
];

const promptUser = () => {
  // ask user for name of pokemon
  // https://pokeapi.co/api/v2/pokemon/{name}/
};

inquirer.prompt(questions);
