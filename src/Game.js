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
        DRAW: 'empate',
        PLAYERONEWINS: 'gana el jugador 1',
        PLAYERTWOWINS: 'gana el jugador 2'
    };
    this.rounds = 0;
};

Game.prototype.round = function(choiceOne, choiceTwo) {
    this.logic(choiceOne, choiceTwo);
    this.rounds++;
    return this.result;
};

Game.prototype.logic = function(choiceOne, choiceTwo) {
    if (choiceOne === choiceTwo) {
        this.result = this.RESULTS.DRAW;
    } else {
        switch (choiceOne) {
            case this.CHOICES.ROCK:
                this.rock(choiceOne, choiceTwo);
                break;
            case this.CHOICES.PAPER:
                this.paper(choiceOne, choiceTwo);
                break;
            case this.CHOICES.SCISSORS:
                this.scissors(choiceOne, choiceTwo);
                break;
        }
    }
};

Game.prototype.rock = function(choiceOne, choiceTwo) {
    this.result = (choiceTwo === this.CHOICES.SCISSORS) ? this.RESULTS.PLAYERONEWINS : this.RESULTS.PLAYERTWOWINS;
};

Game.prototype.paper = function(choiceOne, choiceTwo) {
    this.result = (choiceTwo === this.CHOICES.ROCK) ? this.RESULTS.PLAYERONEWINS : this.RESULTS.PLAYERTWOWINS;
};

Game.prototype.scissors = function(choiceOne, choiceTwo) {
    this.result = (choiceTwo === this.CHOICES.PAPER) ? this.RESULTS.PLAYERONEWINS : this.RESULTS.PLAYERTWOWINS;
};

