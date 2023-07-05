import { Item } from "./Item";

export class Dado {
  private item: Item[];
  private _itemSorteado: Item | undefined;
  private itensRecebidos: Item[] = [];

  constructor(private _lados: number) {
    this.item = [
      new Item("Tocha", 10, 10, 10, 10),
      new Item("Escudo", 10, 10, 10, 10),
      new Item("Espada", 10, 10, 10, 10),
      new Item("Arco", 10, 10, 10, 10),
      new Item("Flecha", 10, 10, 10, 10),
      new Item("Lança", 10, 10, 10, 10),
      new Item("Adaga", 10, 10, 10, 10),
    ];
  }

  public get itemSorteado(): Item | undefined {
    return this._itemSorteado;
  }

  public get lados(): number {
    return this._lados;
  }

  public get itens(): Item[] {
    return this.itensRecebidos;
  }

  public sortearItem(): void {
    const itemSorteado = this.item[Math.floor(Math.random() * this.item.length)];
    this._itemSorteado = itemSorteado.clone();
    this.itensRecebidos.push(this._itemSorteado);
    console.log("\n\n\nVocê recebeu o item " + this._itemSorteado.nome);
  }

  public usarItem(): void {
    if (this.itensRecebidos.length === 0) {
      console.log("\n\n\nVocê não tem itens.");
    } else {
      console.log("\n\n\nVocê usou o item " + this._itemSorteado?.nome);
    }
  }

  public jogar(): number {
    this.sortearItem();
    return Math.floor(Math.random() * this._lados) + 1;
  }
}
