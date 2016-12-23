/**
 * Modulo de juegos de TDD
 * @namespace moduleGame
 */
var moduleGame = (function() {
    'use strict';

    var CHOICES = {
        ROCK: 'piedra',
        PAPER: 'papel',
        SCISSORS: 'tijeras',
        LIZARD: 'lagarto',
        SPOCK: 'spock'
    };

    /**
     * @class moduleGame.Game
     * @memberOf moduleGame
     * @description Representa el juego de Piedra-Papel-Tijera.
     * @constructor
     * @param {string} playerOne - Nombre del jugador 1.
     * @param {string} playerTwo - Nombre del jugador 2.
     */
    var Game = function(playerOne, playerTwo) {
        this.init(playerOne, playerTwo);
    };

    /**
     * method init
     * member Game
     * @description Método que inicializa el juego .
     */
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

    /**
     * method round
     * member Game
     * @description Método que se ejecuta en cada ronda.
     * @param  {string} playerOneChoice Elección del jugador 1.
     * @param  {string} playerTwoChoice Elección del jugador 2.
     * @return {string}                 Resultado de la ronda.
     */
    Game.prototype.round = function(choiceOne, choiceTwo) {
        this.logic(choiceOne, choiceTwo);
        this.rounds++;
        return this.result;
    };

    /**
     * method logic
     * member Game
     * @description Método que se encarga de ejecutar la lógica.
     * @param  {string} playerOneChoice Elección del jugador 1.
     * @param  {string} playerTwoChoice Elección del jugador 2.
     * @return {string}                 Resultado de la ronda.
     */
    Game.prototype.logic = function(choiceOne, choiceTwo) {
        var keyFromChoice;
        if (choiceOne === choiceTwo) {
            this.result = this.RESULTS.DRAW;
        } else {
            keyFromChoice = this.getKeyFromChoice(choiceOne);
            this[keyFromChoice](choiceTwo);
        }
    };

    /**
     * method getKeyFromCoice
     * member Game
     * @description Obtiene la clave de la elección.
     * @param  {string} choice Elección del jugador.
     * @return {string} Clave de la elección en minúsculas.
     */
    Game.prototype.getKeyFromChoice = function(choice) {
        var keyList = Object.keys(CHOICES);
        var result;
        keyList.forEach(function(value, key) {
            if (CHOICES[value] === choice) {
                result = value.toLowerCase();
            }
        });
        return result;
    };

    /**
     * method rock
     * member Game
     * @description Lógica cuando se elige Piedra.
     * @param  {string} choice Elección del jugador.
     */
    Game.prototype.rock = function(choice) {
        this.winsTo(choice, this.CHOICES.SCISSORS);
    };

    /**
     * method paper
     * member Game
     * @description Lógica cuando se elige Papel.
     * @param  {string} choice Elección del jugador.
     */
    Game.prototype.paper = function(choice) {
        this.winsTo(choice, this.CHOICES.ROCK);
    };

    /**
     * method scissors
     * member Game
     * @description Lógica cuando se elige Tijeras.
     * @param  {string} choice Elección del jugador.
     */
    Game.prototype.scissors = function(choice) {
        this.winsTo(choice, this.CHOICES.PAPER);
    };

    /**
     * member Game
     * @description Método que resuelve la lógica de una elección sobre la que ganaría.
     */
    Game.prototype.winsTo = function(choice, losserChoice) {
        this.result = (choice === losserChoice) ? this.RESULTS.PLAYERONEWINS : this.RESULTS.PLAYERTWOWINS;
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @class moduleGame.SpockGame
     * @memberOf moduleGame
     * @description Representa el juego de Piedra-Papel-Tijera-Lagarto-Spock.
     * @augments moduleGame.Game
     * @constructor
     * @param {string} playerOne - Nombre del jugador 1.
     * @param {string} playerTwo - Nombre del jugador 2.
     */
    var SpockGame = function(playerOne, playerTwo) {
        Game.call(this, playerOne, playerTwo);
    };
    SpockGame.prototype = Object.create(Game.prototype);
    SpockGame.prototype.constructor = SpockGame;

    /**
     * method rock
     * member SpockGame
     * @description Lógica cuando se elige Piedra.
     * @param  {string} choice Elección del jugador.
     */
    SpockGame.prototype.rock = function(choice) {
        this.winsTo(choice, this.CHOICES.SCISSORS, this.CHOICES.LIZARD);
    };
    /**
     * method paper
     * member SpockGame
     * @description Lógica cuando se elige Papel.
     * @param  {string} choice Elección del jugador.
     */
    SpockGame.prototype.paper = function(choice) {
        this.winsTo(choice, this.CHOICES.ROCK, this.CHOICES.SPOCK);
    };
    /**
     * method scissors
     * member SpockGame
     * @description Lógica cuando se elige Tijeras.
     * @param  {string} choice Elección del jugador.
     */
    SpockGame.prototype.scissors = function(choice) {
        this.winsTo(choice, this.CHOICES.PAPER, this.CHOICES.LIZARD);
    };
    /**
     * method lizard
     * member SpockGame
     * @description Lógica cuando se elige Lagarto.
     * @param  {string} choice Elección del jugador.
     */
    SpockGame.prototype.lizard = function(choice) {
        this.winsTo(choice, this.CHOICES.PAPER, this.CHOICES.SPOCK);
    };
    /**
     * method spock
     * member SpockGame
     * @description Lógica cuando se elige Spock.
     * @param  {string} choice Elección del jugador.
     */
    SpockGame.prototype.spock = function(choice) {
        this.winsTo(choice, this.CHOICES.ROCK, this.CHOICES.SCISSORS);
    };

    /**
     * member SpockGame
     * @description Método que resuelve la lógica de una elección sobre las que ganaría.
     */
    SpockGame.prototype.winsTo = function(choice, losserChoice, secondLosserChoice) {
        this.result = (choice === losserChoice || choice === secondLosserChoice) ? this.RESULTS.PLAYERONEWINS : this.RESULTS.PLAYERTWOWINS;
    };

    var moduleGame = {
        Game: Game,
        SpockGame: SpockGame
    };

    return moduleGame;
}());
