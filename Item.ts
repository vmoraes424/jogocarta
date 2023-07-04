import { Carta } from "./Jogo";

let carta: Carta;

export class Item {
  constructor() {}

  public modificarForca(carta: Carta, novaForca: number): void {
    carta.forca = novaForca;
  }

  public modificarResistencia(carta: Carta, novaResistencia: number): void {
    carta.resistencia = novaResistencia;
  }

  public modificarDefesa(carta: Carta, novaDefesa: number): void {
    carta.defesa = novaDefesa;
  }

  public modificarVida(carta: Carta, novaVida: number): void {
    carta.vida = novaVida;
  }

  public tocha(carta: Carta): void {
    this.modificarForca(carta, carta.forca + 5);
    console.log("Força aumentada em 5");
  }

  public escudo(carta: Carta): void {
    this.modificarDefesa(carta, carta.defesa + 5);
    console.log("Defesa aumentada em 5");
  }
}
