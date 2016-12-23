var moduleGame = (function() {
    'use strict';

    var CHOICES = {
        ROCK: 'piedra',
        PAPER: 'papel',
        SCISSORS: 'tijeras',
        LIZARD: 'lagarto',
        SPOCK: 'spock'
    };

    var Game = function(playerOne, playerTwo) {
        this.init(playerOne, playerTwo);
    };

    Game.prototype.init = function(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.CHOICES = CHOICES;
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

    Game.prototype.rock = function(choice) {
        this.winsTo(choice, this.CHOICES.SCISSORS);
    };

    Game.prototype.paper = function(choice) {
        this.winsTo(choice, this.CHOICES.ROCK);
    };

    Game.prototype.scissors = function(choice) {
        this.winsTo(choice, this.CHOICES.PAPER);
    };

    Game.prototype.winsTo = function(choice, losserChoice) {
        this.result = (choice === losserChoice) ? this.RESULTS.PLAYERONEWINS : this.RESULTS.PLAYERTWOWINS;
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var SpockGame = function(playerOne, playerTwo) {
        Game.call(this, playerOne, playerTwo);
    };

    SpockGame.prototype = Object.create(Game.prototype);
    SpockGame.prototype.constructor = SpockGame;


    SpockGame.prototype.logic = function(choiceOne, choiceTwo) {
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
                case this.CHOICES.LIZARD:
                    this.lizard(choiceTwo);
                    break;
                case this.CHOICES.SPOCK:
                    this.spock(choiceTwo);
                    break;
            }
        }
    };

    Game.prototype.rock = function(choice) {
        this.winsTo(choice, this.CHOICES.SCISSORS, this.CHOICES.LIZARD);
    };

    Game.prototype.paper = function(choice) {
        this.winsTo(choice, this.CHOICES.ROCK, this.CHOICES.SPOCK);
    };

    Game.prototype.scissors = function(choice) {
        this.winsTo(choice, this.CHOICES.PAPER, this.CHOICES.LIZARD);
    };

    Game.prototype.lizard = function(choice) {
        this.winsTo(choice, this.CHOICES.PAPER, this.CHOICES.SPOCK);
    };

    Game.prototype.spock = function(choice) {
        this.winsTo(choice, this.CHOICES.ROCK, this.CHOICES.SCISSORS);
    };

    Game.prototype.winsTo = function(choice, losserChoice, secondLosserChoice) {
        this.result = (choice === losserChoice || choice === secondLosserChoice) ? this.RESULTS.PLAYERONEWINS : this.RESULTS.PLAYERTWOWINS;
    };

    var moduleGame = {
        Game: Game,
        SpockGame: SpockGame
    };



    return moduleGame;
}());
