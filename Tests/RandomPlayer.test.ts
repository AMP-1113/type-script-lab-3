import RandomPlayer from "../RandomPlayer";

describe("Tests for RandomPlayer class", () => {
    test("name is set by construtor", () => {
        let randomPlayer: RandomPlayer = new RandomPlayer("Taz"); 
        expect(randomPlayer.name).toBe("Taz");
    });
    test("winCount starts at 0", () => {
        let randomPlayer: RandomPlayer = new RandomPlayer("Adam"); 
        expect(randomPlayer.winCount).toBe(0);
    });
});