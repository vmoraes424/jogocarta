"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Praga = exports.Veneno = exports.Adaga = exports.Chinelo = exports.Espada = exports.Escudo = exports.Tocha = exports.ItemEquipavel = exports.itens = exports.Item = void 0;
class Item {
    constructor(_nome, _forca, _defesa, _vida) {
        this._nome = _nome;
        this._forca = _forca;
        this._defesa = _defesa;
        this._vida = _vida;
    }
    get nome() {
        return this._nome;
    }
    get forca() {
        return this._forca;
    }
    get defesa() {
        return this._defesa;
    }
    get vida() {
        return this._vida;
    }
    set nome(nome) {
        this._nome = nome;
    }
    set forca(forca) {
        this._forca = forca;
    }
    set defesa(defesa) {
        this._defesa = defesa;
    }
}
exports.Item = Item;
exports.itens = [];
class ItemEquipavel extends Item {
    constructor(nome, defesa, forca, vida) {
        super(nome, defesa, forca, vida);
    }
}
exports.ItemEquipavel = ItemEquipavel;
class Tocha extends ItemEquipavel {
    constructor() {
        super("Tocha", 10, 0, 0);
    }
    modificarStatus(carta) {
        carta.forca += this.forca;
    }
}
exports.Tocha = Tocha;
class Escudo extends ItemEquipavel {
    constructor() {
        super("Escudo", 0, 20, 10);
    }
    modificarStatus(carta) {
        carta.vida += this.vida;
        carta.defesa += this.defesa;
    }
}
exports.Escudo = Escudo;
class Espada extends ItemEquipavel {
    constructor() {
        super("Espada", 20, 5, 0);
    }
    modificarStatus(carta) {
        carta.forca += this.forca;
        carta.defesa += this.defesa;
    }
}
exports.Espada = Espada;
class Chinelo extends ItemEquipavel {
    constructor() {
        super("Chinelo", 30, 30, 50);
    }
    modificarStatus(carta) {
        carta.forca += this.forca;
        carta.vida += this.vida;
        carta.defesa += this.defesa;
    }
}
exports.Chinelo = Chinelo;
class Adaga extends ItemEquipavel {
    constructor() {
        super("Adaga", 15, 0, 0);
    }
    modificarStatus(carta) {
        carta.forca += this.forca;
    }
}
exports.Adaga = Adaga;
class Veneno extends ItemEquipavel {
    constructor() {
        super("Veneno", 0, 0, -10);
    }
    modificarStatus(carta) {
        carta.vida += this.vida;
    }
}
exports.Veneno = Veneno;
class Praga extends ItemEquipavel {
    constructor() {
        super("Praga", 10, -10, -20);
    }
    modificarStatus(carta) {
        carta.forca += this.forca;
        carta.defesa += this.defesa;
        carta.vida += this.vida;
    }
}
exports.Praga = Praga;
