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
        PLAYERONEWINS: 'gana ' + this.playerOne,
        PLAYERTWOWINS: 'gana ' + this.playerTwo
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
                this.rock(choiceTwo);
                break;
            case this.CHOICES.PAPER:
                this.paper(choiceTwo);
                break;
            case this.CHOICES.SCISSORS:
                this.scissors(choiceTwo);
                break;
        }
    }
};

Game.prototype.rock = function(choiceTwo) {
    this.winsTo(choiceTwo, this.CHOICES.SCISSORS);
};

Game.prototype.paper = function(choiceTwo) {
    this.winsTo(choiceTwo, this.CHOICES.ROCK);
};

Game.prototype.scissors = function(choiceTwo) {
    this.winsTo(choiceTwo, this.CHOICES.PAPER);
};

Game.prototype.winsTo = function(choiceTwo, losserChoice) {
    this.result = (choiceTwo === losserChoice) ? this.RESULTS.PLAYERONEWINS : this.RESULTS.PLAYERTWOWINS;
};
