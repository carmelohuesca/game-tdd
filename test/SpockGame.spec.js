describe('Especificaciones del juego Piedra-Papel-Tijera-Lagarto-Spock:', function() {

    var game;

    var PLAYERONE = 'maria',
        PLAYERTWO = 'eva';

    var CHOICES, RESULTS;


    beforeEach(function() {
        game = new moduleGame.SpockGame(PLAYERONE, PLAYERTWO);
        CHOICES = game.CHOICES;
        RESULTS = game.RESULTS;
    });

    describe('Condiciones iniciales: ', function() {
        it('el juego se inicia con dos jugadores', function() {
            expect(game).toBeDefined();
            expect(game.playerOne).toBe(PLAYERONE);
            expect(game.playerTwo).toBe(PLAYERTWO);
        });

        it('el juego tiene cinco opciones inicialmente (piedra, papel, tijera, lagarto, spock)', function() {
            expect(game.CHOICES).toBeDefined();
            expect(game.CHOICES.ROCK).toBe(CHOICES.ROCK);
            expect(game.CHOICES.PAPER).toBe(CHOICES.PAPER);
            expect(game.CHOICES.SCISSORS).toBe(CHOICES.SCISSORS);
            expect(game.CHOICES.LIZARD).toBe(CHOICES.LIZARD);
            expect(game.CHOICES.SPOCK).toBe(CHOICES.SPOCK);
        });

        it('se incrementa el número de ronda en cada de tirada', function() {
            expect(game.rounds).toBe(0);
            game.round();
            expect(game.rounds).toBe(1);
        });

    });

    describe('Empatan cuando:', function() {
        it('los dos jugadores eligen la misma opción', function() {
            expect(game.round(CHOICES.ROCK, CHOICES.ROCK)).toBe(RESULTS.DRAW);
            expect(game.round(CHOICES.PAPER, CHOICES.PAPER)).toBe(RESULTS.DRAW);
            expect(game.round(CHOICES.SCISSORS, CHOICES.SCISSORS)).toBe(RESULTS.DRAW);
            expect(game.round(CHOICES.LIZARD, CHOICES.LIZARD)).toBe(RESULTS.DRAW);
            expect(game.round(CHOICES.SPOCK, CHOICES.SPOCK)).toBe(RESULTS.DRAW);
        });
    });

});
// describe('Gana el jugador 1 cuando:', function() {

//     it('el jugador 1 elige "piedra" y el jugador 2 elige "tijeras"', function() {

//     });

//     it('el jugador 1 elige "papel" y el jugador 2 elige "piedra"', function() {

//     });

//     it('el jugador 1 elige "tijeras" y el jugador 2 elige "papel"', function() {

//     });

//     it('el jugador 1 elige "piedra" y el jugador 2 elige "lagarto"', function() {

//     });

//     it('el jugador 1 elige "tijeras" y el jugador 2 elige "lagarto"', function() {

//     });

//     it('el jugador 1 elige "lagarto" y el jugador 2 elige "spock"', function() {

//     });

//     it('el jugador 1 elige "lagarto" y el jugador 2 elige "papel"', function() {

//     });

//     it('el jugador 1 elige "spock" y el jugador 2 elige "piedra"', function() {

//     });

//     it('el jugador 1 elige "spock" y el jugador 2 elige "tijeras"', function() {

//     });

// });

// describe('Gana el jugador 2 cuando:', function() {

//     it('el jugador 1 elige "piedra" y el jugador 2 elige "papel"', function() {

//     });

//     it('el jugador 1 elige "papel" y el jugador 2 elige "tijeras"', function() {

//     });

//     it('el jugador 1 elige "tijeras" y el jugador 2 elige "piedra"', function() {

//     });

//     it('el jugador 1 elige "piedra" y el jugador 2 elige "spock"', function() {

//     });

//     it('el jugador 1 elige "papel" y el jugador 2 elige "lagarto"', function() {

//     });

//     it('el jugador 1 elige "papel" y el jugador 2 elige "spock"', function() {

//     });

//     it('el jugador 1 elige "tijeras" y el jugador 2 elige "spock"', function() {

//     });

//     it('el jugador 1 elige "lagarto" y el jugador 2 elige "piedra"', function() {

//     });

//     it('el jugador 1 elige "lagarto" y el jugador 2 elige "tijeras"', function() {

//     });

//     it('el jugador 1 elige "spock" y el jugador 2 elige "papel"', function() {

//     });

// });

// });

// });
