import ConsistentPlayer from "../ConsistentPlayer";
import { playAndPickWinner} from "../functions";
import Player from "../player";
describe("play and pick winner function", () => {
    test("rock vs scissors", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "rock");
        let villain: Player = new ConsistentPlayer("Bane", "scissors")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(hero);
    });
    test("rock vs paper", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "rock");
        let villain: Player = new ConsistentPlayer("Bane", "paper")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(villain);
    });
    test("rock vs rock", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "rock");
        let villain: Player = new ConsistentPlayer("Bane", "rock")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(null);
    });
    test("scissors vs paper", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "scissors");
        let villain: Player = new ConsistentPlayer("Bane", "paper")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(hero);
    });
    test("scissors vs rock", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "scissors");
        let villain: Player = new ConsistentPlayer("Bane", "rock")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(villain);
    });
    test("scissors vs scissors", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "scissors");
        let villain: Player = new ConsistentPlayer("Bane", "scissors")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(null);
    });
    test("paper vs rock", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "paper");
        let villain: Player = new ConsistentPlayer("Bane", "rock")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(hero);
    });
    test("paper vs scissors", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "paper");
        let villain: Player = new ConsistentPlayer("Bane", "scissors")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(villain);
    });
    test("paper vs paper", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "paper");
        let villain: Player = new ConsistentPlayer("Bane", "paper")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(null);
    });
});