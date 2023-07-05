"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
class Util {
    static randomizar(minimo, maximo) {
        const valorSorteado = minimo + Math.random() * (maximo - minimo);
        const valorInteiro = Math.round(valorSorteado);
        return valorInteiro;
    }
    static chance(chance, personalizado) {
        return personalizado ? Util.randomizar(0, personalizado) : Util.randomizar(0, 100) <= chance;
    }
    static randomizarCarta(carta) {
        return carta[Math.floor(Math.random() * carta.length)];
    }
}
exports.Util = Util;
