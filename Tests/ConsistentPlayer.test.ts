import ConsistentPlayer from "../ConsistentPlayer";

describe("Tests fors ConsistentPlayer Class", () => {
    test("name is set by construtor", () => {
        let consistentPlayer: ConsistentPlayer = new ConsistentPlayer("Adam", "rock"); 
        expect(consistentPlayer.name).toBe("Adam");
    });
    test("winCount starts at 0", () => {
        let consistentPlayer: ConsistentPlayer = new ConsistentPlayer("Adam", "rock"); 
        expect(consistentPlayer.winCount).toBe(0);
    });
    test("pickSymbol returns the symbol set by constructor", () => {
        let consistentPlayer: ConsistentPlayer = new ConsistentPlayer("Sam", "paper"); 
        expect(consistentPlayer.pickSymbol()).toBe("paper");
    });

});