# Pokemon Downloader

Hey there! 👋 This is my Pokemon information downloader project that I created while learning JavaScript. It's a simple command-line app that lets you download Pokemon stats and pictures using the PokeAPI.

## What it does

You can:

- Type in any Pokemon name
- Choose what you want to download:
  - Stats (like HP, attack, defense, etc.)
  - Sprite pictures (the 2D game sprites)
  - The official artwork
- Everything gets saved in a neat folder with the Pokemon's name

## How to use it

1. Make sure you have Node.js installed
2. Run `npm install` to get the needed packages
3. Start it with `node prompt.js`
4. Type a Pokemon name (like "pikachu")
5. Pick what you want to download
6. Check out your new Pokemon folder!

## Learning Notes

This project helped me practice:

- Working with APIs
- Using async/await and vanilla Promises in JavaScript
- File handling
- Using the inquirer package for user input

This project is inspired by the JavaScript in Depth YouTube series by [Tech with Nader](https://www.youtube.com/@TechWithNader). I focused on implementing the core requirements and created my own solution.

## Packages Used

- inquirer (for the nice command-line prompts)
