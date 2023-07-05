"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dado = exports.itens = void 0;
const Item_1 = require("./Item");
exports.itens = [];
class Dado {
    constructor(_lados) {
        this._lados = _lados;
        this.item = [
            new Item_1.Item("Tocha", 10, 0, 0, 0),
            new Item_1.Item("Escudo", 10, 10, 10, 10),
            new Item_1.Item("Espada", 10, 10, 10, 10),
            new Item_1.Item("Arco", 10, 10, 10, 10),
            new Item_1.Item("Flecha", 10, 10, 10, 10),
            new Item_1.Item("Lança", 10, 10, 10, 10),
            new Item_1.Item("Adaga", 10, 10, 10, 10),
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
        itemSorteado.modificarDefesa(carta, itemSorteado.defesa);
        itemSorteado.modificarForca(carta, itemSorteado.forca);
        itemSorteado.modificarResistencia(carta, itemSorteado.resistencia);
        itemSorteado.modificarVida(carta, itemSorteado.vida);
        console.log("\n\n\nVocê recebeu o item " + itemSorteado.nome);
    }
    jogar() {
        return Math.floor(Math.random() * this._lados) + 1;
    }
}
exports.Dado = Dado;
