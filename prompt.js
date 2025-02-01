import inquirer from "inquirer";

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
    const response = fetch(
      "https://pokeapi.co/api/v2/pokemon/" + `${answers.pokemonName}`
    );
    response
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
      });
  });
};

promptUser();

// const fetchPokemon = (questions) => {

// };

// fetchPokemon();
