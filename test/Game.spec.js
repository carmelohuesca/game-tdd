describe('Especificaciones del juego Piedra-Papel-Tijera:', function() {

    var game;

    var PLAYERONE = 'juan',
        PLAYERTWO = 'pedro';

    var CHOICES, RESULTS;

    beforeEach(function() {
        game = new moduleGame.Game(PLAYERONE, PLAYERTWO);
        CHOICES = game.CHOICES;
        RESULTS = game.RESULTS;
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
        });
    });

    describe('Gana el jugador 1 cuando:', function() {
        it('el jugador 1 elige "piedra" y el jugador 2 elige "tijeras"', function() {
            expect(game.round(CHOICES.ROCK, CHOICES.SCISSORS)).toBe(RESULTS.PLAYERONEWINS);
        });
        it('el jugador 1 elige "papel" y el jugador 2 elige "piedra"', function() {
            expect(game.round(CHOICES.PAPER, CHOICES.ROCK)).toBe(RESULTS.PLAYERONEWINS);
        });
        it('el jugador 1 elige "tijeras" y el jugador 2 elige "papel"', function() {
            expect(game.round(CHOICES.SCISSORS, CHOICES.PAPER)).toBe(RESULTS.PLAYERONEWINS);
        });
    });

    describe('Gana el jugador 2 cuando:', function() {
        it('el jugador 1 elige "piedra" y el jugador 2 elige "papel"', function() {
            expect(game.round(CHOICES.ROCK, CHOICES.PAPER)).toBe(RESULTS.PLAYERTWOWINS);
        });
        it('el jugador 1 elige "papel" y el jugador 2 elige "tijeras"', function() {
            expect(game.round(CHOICES.PAPER, CHOICES.SCISSORS)).toBe(RESULTS.PLAYERTWOWINS);
        });
        it('el jugador 1 elige "tijeras" y el jugador 2 elige "piedra"', function() {
            expect(game.round(CHOICES.SCISSORS, CHOICES.ROCK)).toBe(RESULTS.PLAYERTWOWINS);
        });
    });

});
