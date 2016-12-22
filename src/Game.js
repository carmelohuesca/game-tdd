var Game = function(playerOne, playerTwo) {
    this.init(playerOne, playerTwo);
};

Game.prototype.init = function(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.CHOICES = {
        ROCK: 'piedra',
        PAPER: 'papel',
        SCISSORS: 'tijeras'
    };
    this.RESULTS = {
        DRAW: 'empate'
    };
    this.rounds = 0;
};

Game.prototype.round = function(choiceOne, choiceTwo) {
    this.rounds++;
    if (choiceOne === choiceTwo) {
        this.result = this.RESULTS.DRAW;
    }
    return this.result;
};
