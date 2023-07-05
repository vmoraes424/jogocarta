"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
let carta;
class Item {
    constructor(_nome, _forca, _resistencia, _defesa, _vida) {
        this._nome = _nome;
        this._forca = _forca;
        this._resistencia = _resistencia;
        this._defesa = _defesa;
        this._vida = _vida;
    }
    get nome() {
        return this._nome;
    }
    get forca() {
        return this._forca;
    }
    get resistencia() {
        return this._resistencia;
    }
    get defesa() {
        return this._defesa;
    }
    get vida() {
        return this._vida;
    }
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
    clone() {
        return new Item(this._nome, this._forca, this._resistencia, this._defesa, this._vida);
    }
}
exports.Item = Item;
