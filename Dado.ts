import { Escudo, ItemEquipavel, Tocha, Chinelo, Adaga, Praga, Espada, Veneno } from "./Item";
import { Carta } from "./Jogo";

export class Dado {
  private item: ItemEquipavel[];
  private _itemSorteado: ItemEquipavel | undefined;

  constructor(private _lados: number) {
    this.item = [
      new Tocha(),
      new Escudo(),
      new Chinelo(),
      new Adaga(),
      new Praga(),
      new Espada(),
      new Veneno(),
    ];
  }

  public get itemSorteado(): ItemEquipavel | undefined {
    return this._itemSorteado;
  }

  public get lados(): number {
    return this._lados;
  }

  public sortearItem(carta: Carta): void {
    const itemSorteado = this.item[Math.floor(Math.random() * this.item.length)];
    itemSorteado.modificarStatus(carta, itemSorteado.forca, itemSorteado.defesa, itemSorteado.vida);
    console.log(`\n${carta.nome} recebeu o item ${itemSorteado.nome}!`);
  }

  public jogar(): number {
    return Math.floor(Math.random() * this._lados) + 1;
  }
}