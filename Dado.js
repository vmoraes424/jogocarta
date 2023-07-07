"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dado = void 0;
const Item_1 = require("./Item");
class Dado {
    constructor(_lados) {
        this._lados = _lados;
        this.item = [
            new Item_1.Tocha(),
            new Item_1.Escudo(),
            new Item_1.Chinelo(),
            new Item_1.Adaga(),
            new Item_1.Praga(),
            new Item_1.Espada(),
            new Item_1.Veneno(),
        ];
    }
    get itemSorteado() {
        return this._itemSorteado;
    }
    get lados() {
        return this._lados;
    }
    sortearItem(carta) {
        const itemSorteado = this.item[Math.floor(Math.random() * this.item.length)];
        itemSorteado.modificarStatus(carta, itemSorteado.forca, itemSorteado.defesa, itemSorteado.vida);
        console.log(`\n${carta.nome} recebeu o item ${itemSorteado.nome}!`);
    }
    jogar() {
        return Math.floor(Math.random() * this._lados) + 1;
    }
}
exports.Dado = Dado;
