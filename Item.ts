import { Carta } from "./Jogo";

export class Item {
  constructor(
    private _nome: string,
    private _forca: number,
    private _defesa: number,
    private _vida: number
  ) { }

  public get nome(): string {
    return this._nome;
  }

  public get forca(): number {
    return this._forca;
  }

  public get defesa(): number {
    return this._defesa;
  }

  public get vida(): number {
    return this._vida;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }
  public set forca(forca: number) {
    this._forca = forca;
  }
  public set defesa(defesa: number) {
    this._defesa = defesa;
  }
}

export let itens: Item[] = [];

export abstract class ItemEquipavel extends Item {
  constructor(
    nome: string,
    defesa: number,
    forca: number,
    vida: number

  ) {
    super(nome, defesa, forca, vida);
  }

  public abstract modificarStatus(carta: Carta, forca: number, defesa: number, vida: number): void
}

export class Tocha extends ItemEquipavel {
  constructor() {
    super("Tocha", 10, 0, 0);
  }
  public modificarStatus(carta: Carta): void {
    carta.forca += this.forca
  }
}
export class Escudo extends ItemEquipavel {
  constructor() {
    super("Escudo", 0, 20, 10);
  }
  public modificarStatus(carta: Carta): void {
    carta.vida += this.vida
    carta.defesa += this.defesa
  }
}
export class Espada extends ItemEquipavel {
  constructor() {
    super("Espada", 20, 5, 0);
  }
  public modificarStatus(carta: Carta): void {
    carta.forca += this.forca
    carta.defesa += this.defesa
  }
}
export class Chinelo extends ItemEquipavel {
  constructor() {
    super("Chinelo", 30, 30, 50);
  }
  public modificarStatus(carta: Carta): void {
    carta.forca += this.forca
    carta.vida += this.vida
    carta.defesa += this.defesa
  }
}
export class Adaga extends ItemEquipavel {
  constructor() {
    super("Adaga", 15, 0, 0);
  }
  public modificarStatus(carta: Carta): void {
    carta.forca += this.forca
  }
}
export class Veneno extends ItemEquipavel {
  constructor() {
    super("Veneno", 0, 0, -10);
  }
  public modificarStatus(carta: Carta): void {
    carta.vida += this.vida
  }
}
export class Praga extends ItemEquipavel {
  constructor() {
    super("Praga", 10, -10, -20);
  }
  public modificarStatus(carta: Carta): void {
    carta.forca += this.forca
    carta.defesa += this.defesa
    carta.vida += this.vida
  }
}
