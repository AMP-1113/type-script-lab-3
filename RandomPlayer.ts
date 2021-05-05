import Player from "./player";

export default class RandomPlayer extends Player {
    constructor(name: string) {
        super(name);
    }
    pickSymbol(): string {
        let randomNum: number = Math.floor(Math.random() * 3)
        let symbols: string[] = ["rock", "paper", "scissors"];
        return symbols[randomNum];
    }
}