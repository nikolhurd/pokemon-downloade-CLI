import inquirer from "inquirer";

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

const promptUser = () => {
  //  https://pokeapi.co/api/v2/pokemon/`${pokemonName}`
};

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});
