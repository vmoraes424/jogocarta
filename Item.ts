import { Carta } from "./Jogo";

let carta: Carta;

export class Item {
  constructor(
    private _nome: string,
    private _forca: number,
    private _resistencia: number,
    private _defesa: number,
    private _vida: number
  ) {}

  public get nome(): string {
    return this._nome;
  }

  public get forca(): number {
    return this._forca;
  }

  public get resistencia(): number {
    return this._resistencia;
  }

  public get defesa(): number {
    return this._defesa;
  }

  public get vida(): number {
    return this._vida;
  }

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
