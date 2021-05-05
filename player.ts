export default abstract class Player {
    name: string;
    winCount: number = 0;
    constructor(name: string) {
        this.name = name;
    }
    // abstract have 'abstract' keyword and semicolon.
    abstract pickSymbol(): string;
};