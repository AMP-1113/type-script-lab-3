import configPrompt from 'prompt-sync';
import ConsistentPlayer from "./ConsistentPlayer";
import RandomPlayer from "./RandomPlayer"
import { playAndPickWinner, displayHeroes } from "./functions";
import Player from "./player";

// prompt is a function to get user input.
const prompt = configPrompt({sigint: true});

// Tests
// let hero: Player = new ConsistentPlayer("Rocko", "rock");
// let villain: Player = new ConsistentPlayer("Hot Dog", "scissors");
// let randomPlayer = new RandomPlayer("Frank");
// console.log("random: ", randomPlayer);

// console.log(randomPlayer.pickSymbol());
// console.log(hero.pickSymbol());

// let winner = playAndPickWinner(hero, villain);
// console.log( "winner", winner );

// let color = prompt("Enter a color: ");
// console.log("you typed " + color);

// Array of Villains
const villainsArray: Player[] = [
    new RandomPlayer("Arsehole"),
    new ConsistentPlayer("Bash", "rock"),
    new RandomPlayer("Bad Boy"),
    new ConsistentPlayer("Vik", "paper"),
    new RandomPlayer("Sick Nick"),
    new RandomPlayer("Naughty Nathan"),
];
// Array of Heros
const heroesArray: Player[] = [
    new RandomPlayer("Good Boy"),
    new ConsistentPlayer("Rocko", "rock"),
    new ConsistentPlayer("Tissue Tommy", "paper"),
    new ConsistentPlayer("Cutter McGee", "scissors"),
];

// GAME
for (let villain in villainsArray) {
    console.log( `You are fighting ${villainsArray[villain].name}!!!` )
    console.log( "Choose a fighter below:")
    // print heroes
    displayHeroes(heroesArray);
    let userHeroString = prompt("type a name here: ");
    const hero = heroesArray.find(fighter => fighter.name === userHeroString);
    // console.log(hero);
    if (hero === undefined) {
        console.log("not a valid name!")
        break;
    }
    const play = playAndPickWinner(hero, villainsArray[villain]);
    if (play === hero) {
        console.log("*****WIN*****");
        hero.winCount++;
    } else if (play === villainsArray[villain]) {
        console.log("*****LOSS*****")
    } else {
        console.log("*****TIE*****")
    }
    console.log("---------------------------")
}

let totalWins: number = 0
for (let hero of heroesArray) {
    totalWins =+ hero.winCount;
}
console.log(`---------- Total wins: ${totalWins} ----------`);
displayHeroes(heroesArray);
console.log("----------------------------------------------")


// npx nodemon index.ts -I