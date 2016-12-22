describe('Especificaciones del juego Piedra-Papel-Tijera:', function() {

    var game;

    var PLAYERONE = 'juan',
        PLAYERTWO = 'pedro';

    var CHOICES = {
        ROCK: 'piedra',
        PAPER: 'papel',
        SCISSORS: 'tijeras'
    };

    beforeEach(function() {
        game = new Game(PLAYERONE, PLAYERTWO);
    });

    describe('Al principio:', function() {

        it('el juego se inicia con dos jugadores', function() {
            expect(game).toBeDefined();
            expect(game.playerOne).toBe(PLAYERONE);
            expect(game.playerTwo).toBe(PLAYERTWO);
        });

        it('el juego tiene tres opciones inicialmente (piedra, papel, tijera)', function() {
            expect(game.CHOICES).toBeDefined();
            expect(game.CHOICES.ROCK).toBe(CHOICES.ROCK);
            expect(game.CHOICES.PAPER).toBe(CHOICES.PAPER);
            expect(game.CHOICES.SCISSORS).toBe(CHOICES.SCISSORS);
        });

        xit('se incrementa el número de ronda en cada de tirada', function() {

        });

    });

    // describe('Empatan cuando:', function() {

    //     it('los dos jugadores eligen la misma opción', function() {

    //     });

    // });

    // describe('Gana el jugador 1 cuando:', function() {

    //     it('el jugador 1 elige "piedra" y el jugador 2 elige "tijeras"', function() {

    //     });

    //     it('el jugador 1 elige "papel" y el jugador 2 elige "piedra"', function() {

    //     });

    //     it('el jugador 1 elige "tijeras" y el jugador 2 elige "papel"', function() {

    //     });

    // });

    // describe('Gana el jugador 2 cuando:', function() {

    //     it('el jugador 1 elige "piedra" y el jugador 2 elige "papel"', function() {

    //     });

    //     it('el jugador 1 elige "papel" y el jugador 2 elige "tijeras"', function() {

    //     });

    //     it('el jugador 1 elige "tijeras" y el jugador 2 elige "piedra"', function() {

    //     });

    // });

});
