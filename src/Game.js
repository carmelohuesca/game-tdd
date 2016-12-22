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
};
