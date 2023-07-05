import { Item } from "./Item";
import { Carta } from "./Jogo";

export let itens: Item[] = [];

export class Dado {
  private item: Item[];
  private _itemSorteado: Item | undefined;

  constructor(private _lados: number) {
    this.item = [
      new Item("Tocha", 10, 0, 0, 0),
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

  public sortearItem(carta: Carta): void {
    const itemSorteado = this.item[Math.floor(Math.random() * this.item.length)];
    itemSorteado.modificarDefesa(carta, itemSorteado.defesa);
    itemSorteado.modificarForca(carta, itemSorteado.forca);
    itemSorteado.modificarResistencia(carta, itemSorteado.resistencia);
    itemSorteado.modificarVida(carta, itemSorteado.vida);
    console.log("\n\n\nVocê recebeu o item " + itemSorteado.nome);
  }

  public jogar(): number {
    return Math.floor(Math.random() * this._lados) + 1;
  }
}
