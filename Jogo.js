"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carta = void 0;
const Item_1 = require("./Item");
const write = require("prompt-sync")();
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
        if (vida <= 0)
            throw new Error("Vida não pode ser menor que 0");
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
    new Carta("Zeus", 10, 10, 10, 100),
    new Carta("Poseidon", 10, 10, 10, 100),
    new Carta("Atena", 10, 10, 10, 100),
    new Carta("Ares", 10, 10, 10, 100),
    new Carta("Ártemis", 10, 10, 10, 100),
    new Carta("Hermes", 10, 10, 10, 100),
    new Carta("Hera", 10, 10, 10, 100),
    new Carta("Deméter", 10, 10, 10, 100),
    new Carta("Hefesto", 10, 10, 10, 100),
    new Carta("Apolo", 10, 10, 10, 100),
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
        console.log(this._atacante.nome + " atacou " + this._defensor.nome);
        console.log(this._atacante.vida + " " + this._defensor.vida);
    }
}
class Dado {
    constructor(_lados) {
        this._lados = _lados;
        this.item = [
            new Item_1.Item("Tocha", 10, 10, 10, 10),
            new Item_1.Item("Escudo", 10, 10, 10, 10),
            new Item_1.Item("Espada", 10, 10, 10, 10),
            new Item_1.Item("Arco", 10, 10, 10, 10),
            new Item_1.Item("Flecha", 10, 10, 10, 10),
            new Item_1.Item("Lança", 10, 10, 10, 10),
            new Item_1.Item("Adaga", 10, 10, 10, 10),
        ];
    }
    sortearItem() {
        return this.item[Math.floor(Math.random() * this.item.length)];
    }
    get lados() {
        return this._lados;
    }
    jogar() {
        return Math.floor(Math.random() * this._lados) + 1;
    }
}
class Jogo {
    constructor() {
        this._randomizado = false;
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
    get randomizado() {
        return this._randomizado;
    }
    darCartas() {
        const carta1 = cartas[Math.floor(Math.random() * cartas.length)];
        const carta2 = cartas[Math.floor(Math.random() * cartas.length)];
        this._jogador1 = carta1;
        this._jogador2 = carta2;
        console.log(`Jogador 1: ${this._jogador1.nome} - ${this._jogador1.forca} - ${this._jogador1.resistencia} - ${this._jogador1.defesa} - ${this._jogador1.vida}`);
        console.log(`Jogador 2: ${this._jogador2.nome} - ${this._jogador2.forca} - ${this._jogador2.resistencia} - ${this._jogador2.defesa} - ${this._jogador2.vida}`);
        this._randomizado = true;
    }
    jogar() {
        const luta = new Luta(this._jogador1, this._jogador2);
        luta.atacar();
    }
}
function menu() {
    const jogo = new Jogo();
    jogo.darCartas();
    while (true) {
        const dado = new Dado(6);
        console.log("»»——————————　★　——————————««");
        console.log("");
        console.log("1--Rolar o dado");
        console.log("2--Atacar");
        console.log("3--Encerrar jogo");
        console.log("4--Testar item");
        console.log("5--Testar personagem");
        console.log("");
        console.log("»»——————————　★　——————————««");
        const opcao = +write("Escolha uma opção: ");
        switch (opcao) {
            case 1:
                console.log(`O seu dado caiu em ${dado.jogar()}`);
                break;
            case 2:
                jogo.jogar();
                break;
            case 3:
                throw console.error("O jogo foi encerrado");
            case 4:
                break;
            case 5:
                console.table(jogo.jogador1);
                console.table(jogo.jogador2);
            default:
                console.log("Opção inválida");
                break;
        }
    }
}
const jogo = new Jogo();
menu();
