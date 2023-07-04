"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
let carta;
class Item {
    constructor() { }
    modificarForca(carta, novaForca) {
        carta.forca = novaForca;
    }
    modificarResistencia(carta, novaResistencia) {
        carta.resistencia = novaResistencia;
    }
    modificarDefesa(carta, novaDefesa) {
        carta.defesa = novaDefesa;
    }
    modificarVida(carta, novaVida) {
        carta.vida = novaVida;
    }
    tocha(carta) {
        this.modificarForca(carta, carta.forca + 5);
        console.log("Força aumentada em 5");
    }
    escudo(carta) {
        this.modificarDefesa(carta, carta.defesa + 5);
        console.log("Defesa aumentada em 5");
    }
}
exports.Item = Item;
