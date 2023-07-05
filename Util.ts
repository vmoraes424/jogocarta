import { Carta } from "./Jogo";

export class Util {
  public static randomizar(minimo: number, maximo: number) {
    const valorSorteado = minimo + Math.random() * (maximo - minimo);
    const valorInteiro = Math.round(valorSorteado);
    return valorInteiro;
  }
  public static chance(chance: number, personalizado?: number) {
    return personalizado ? Util.randomizar(0, personalizado) : Util.randomizar(0, 100) <= chance;
  }
  static randomizarCarta(carta: Carta[]): Carta {
    return carta[Math.floor(Math.random() * carta.length)];
  }

}