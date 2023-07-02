"use strict";
class Carta {
    constructor(_nome, _forca, _resistencia, _defesa, _vida) {
        this._nome = _nome;
        this._forca = _forca;
        this._resistencia = _resistencia;
        this._defesa = _defesa;
        this._vida = _vida;
    }
    get forca() {
        return this._forca;
    }
    set forca(forca) {
        this._forca = forca;
    }
    get resistencia() {
        return this._resistencia;
    }
    set resistencia(resistencia) {
        this._resistencia = resistencia;
    }
    get defesa() {
        return this._defesa;
    }
    set defesa(defesa) {
        this._defesa = defesa;
    }
    get vida() {
        return this._vida;
    }
    set vida(vida) {
        this._vida = vida;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
}
const cartas = [
    new Carta("Zeus", 10, 10, 10, 10),
    new Carta("Poseidon", 10, 10, 10, 10),
    new Carta("Atena", 10, 10, 10, 10),
    new Carta("Ares", 10, 10, 10, 10),
    new Carta("Ártemis", 10, 10, 10, 10),
    new Carta("Hermes", 10, 10, 10, 10),
    new Carta("Hera", 10, 10, 10, 10),
    new Carta("Deméter", 10, 10, 10, 10),
    new Carta("Hefesto", 10, 10, 10, 10),
    new Carta("Apolo", 10, 10, 10, 10),
];
class Randomizar {
    static randomizarCarta(carta) {
        return carta[Math.floor(Math.random() * carta.length)];
    }
}
class Luta {
    constructor(_atacante, _defensor) {
        this._atacante = _atacante;
        this._defensor = _defensor;
    }
    get atacante() {
        return this._atacante;
    }
    set atacante(atacante) {
        this._atacante = atacante;
    }
    get defensor() {
        return this._defensor;
    }
    set defensor(defensor) {
        this._defensor = defensor;
    }
    atacar() {
        this._defensor.vida -= this._atacante.forca;
    }
}
class Dado {
    constructor(_lados) {
        this._lados = _lados;
    }
    jogar() {
        console.log("Dado jogado " + this._lados);
        return Math.floor(Math.random() * this._lados) + 1;
    }
}
class Jogo {
    constructor() {
        this._jogador1 = Randomizar.randomizarCarta(cartas);
        this._jogador2 = Randomizar.randomizarCarta(cartas);
    }
    get jogador1() {
        return this._jogador1;
    }
    set jogador1(jogador1) {
        this._jogador1 = jogador1;
    }
    get jogador2() {
        return this._jogador2;
    }
    set jogador2(jogador2) {
        this._jogador2 = jogador2;
    }
    darCartas() {
        const carta1 = cartas[Math.floor(Math.random() * cartas.length)];
        const carta2 = cartas[Math.floor(Math.random() * cartas.length)];
        this._jogador1 = carta1;
        this._jogador2 = carta2;
        console.log(`Jogador 1: ${this._jogador1.nome} - ${this._jogador1.forca} - ${this._jogador1.resistencia} - ${this._jogador1.defesa} - ${this._jogador1.vida}`);
        console.log(`Jogador 2: ${this._jogador2.nome} - ${this._jogador2.forca} - ${this._jogador2.resistencia} - ${this._jogador2.defesa} - ${this._jogador2.vida}`);
    }
    jogar() {
        const luta = new Luta(this._jogador1, this._jogador2);
        luta.atacar();
    }
}
const jogo = new Jogo();
jogo.jogar();
