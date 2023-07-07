"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carta = void 0;
const Dado_1 = require("./Dado");
const Util_1 = require("./Util");
const write = require("prompt-sync")();
class Carta {
    constructor(_nome, _forca, _defesa, _vida) {
        this._nome = _nome;
        this._forca = _forca;
        this._defesa = _defesa;
        this._vida = _vida;
    }
    get forca() {
        return this._forca;
    }
    set forca(forca) {
        this._forca = forca;
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
        if (vida <= 0)
            throw new Error(this.nome + " morreu");
        this._vida = vida;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
}
exports.Carta = Carta;
const cartas = [
    new Carta("Zeus", 20, 10, 90),
    new Carta("Poseidon", 5, 15, 150),
    new Carta("Atena", 3, 20, 150),
    new Carta("Ares", 5, 50, 50),
    new Carta("Ártemis", 10, 10, 100),
    new Carta("Hermes", 10, 15, 120),
    new Carta("Hera", 15, 5, 100),
    new Carta("Deméter", 5, 15, 150),
    new Carta("Hefesto", 20, 20, 70),
    new Carta("Apolo", 18, 15, 110),
];
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
        this._defensor.vida -= this._atacante.forca - (this._atacante.defesa * 0.2);
        console.log(`»»——————————　★　——————————««\n${this._atacante.nome} atacou ${this._defensor.nome}`);
        console.log(`Vida de ${this._defensor.nome}: ${this._defensor.vida}`);
        this.contraAtacar(this._atacante, this._defensor);
        console.table(this._defensor);
    }
    contraAtacar(jogador1, jogador2) {
        if (Util_1.Util.chance(40)) {
            jogador1.vida -= jogador2.forca - (jogador1.defesa * 0.5);
            console.log(`${jogador2.nome} contra-atacou!`);
            console.log(`Vida de ${jogador1.nome}: ${jogador1.vida}\n`);
        }
        else {
            console.log(`${jogador1.nome} se esquivou do contra-ataque de ${jogador2.nome}\n`);
        }
    }
    inimigoAtacar() {
        this._atacante.vida -= this._defensor.forca - (this._atacante.defesa * 0.2);
        console.log(`\n${this._atacante.nome} foi atacado por ${this._defensor.nome}`);
        console.log(`Vida de ${this._atacante.nome}: ${this._atacante.vida}`);
        this.contraAtacar(this._defensor, this._atacante);
        console.table(this._atacante);
    }
}
class Jogo {
    constructor() {
        this._randomizado = false;
        this._jogador1 = Util_1.Util.randomizarCarta(cartas);
        this._jogador2 = Util_1.Util.randomizarCarta(cartas);
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
    get randomizado() {
        return this._randomizado;
    }
    darCartas() {
        const carta1 = cartas[Math.floor(Math.random() * cartas.length)];
        const carta2 = cartas[Math.floor(Math.random() * cartas.length)];
        this._jogador1 = carta1;
        this._jogador2 = carta2;
        this._randomizado = true;
    }
    jogar() {
        const luta = new Luta(this._jogador1, this._jogador2);
        luta.atacar();
        luta.inimigoAtacar();
    }
}
function menu() {
    const jogo = new Jogo();
    jogo.darCartas();
    console.table(jogo.jogador1);
    console.table(jogo.jogador2);
    while (true) {
        const dado = new Dado_1.Dado(6);
        console.log("»»——————————　★　——————————««");
        console.log("");
        console.log("1--Rolar o dado");
        console.log("2--Atacar");
        console.log("3--Encerrar jogo");
        console.log("4--Mostrar personagens");
        console.log("");
        console.log("»»——————————　★　——————————««");
        const opcao = +write("Escolha uma opção: ");
        switch (opcao) {
            case 1:
                console.log(`\nO seu dado caiu em ${dado.jogar()}`);
                dado.sortearItem(jogo.jogador1);
                dado.sortearItem(jogo.jogador2);
                break;
            case 2:
                jogo.jogar();
                break;
            case 3:
                throw console.error("O jogo foi encerrado");
            case 4:
                console.table(jogo.jogador1);
                console.table(jogo.jogador2);
                break;
            default:
                console.log("Opção inválida");
                break;
        }
    }
}
menu();
