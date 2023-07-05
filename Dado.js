"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dado = void 0;
const Item_1 = require("./Item");
class Dado {
    constructor(_lados) {
        this._lados = _lados;
        this.itensRecebidos = [];
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
    get itemSorteado() {
        return this._itemSorteado;
    }
    get lados() {
        return this._lados;
    }
    get itens() {
        return this.itensRecebidos;
    }
    sortearItem() {
        const itemSorteado = this.item[Math.floor(Math.random() * this.item.length)];
        this._itemSorteado = itemSorteado.clone();
        this.itensRecebidos.push(this._itemSorteado);
        console.log("\n\n\nVocê recebeu o item " + this._itemSorteado.nome);
    }
    usarItem() {
        var _a;
        if (this.itensRecebidos.length === 0) {
            console.log("\n\n\nVocê não tem itens.");
        }
        else {
            console.log("\n\n\nVocê usou o item " + ((_a = this._itemSorteado) === null || _a === void 0 ? void 0 : _a.nome));
        }
    }
    jogar() {
        this.sortearItem();
        return Math.floor(Math.random() * this._lados) + 1;
    }
}
exports.Dado = Dado;
