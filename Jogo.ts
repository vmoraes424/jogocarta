import { Dado } from "./Dado";
import { Item } from "./Item";
import { Util } from "./Util";
const write = require("prompt-sync")();

export class Carta {
  constructor(
    private _nome: string,
    private _forca: number,
    private _defesa: number,
    private _vida: number
  ) {
  }

  public get forca(): number {
    return this._forca;
  }
  public set forca(forca: number) {
    this._forca = forca;
  }
  public get defesa(): number {
    return this._defesa;
  }
  public set defesa(defesa: number) {
    this._defesa = defesa;
  }
  public get vida(): number {
    return this._vida;
  }
  public set vida(vida: number) {
    if (vida <= 0) throw new Error(this.nome + " morreu");
    this._vida = vida;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }
}

const cartas = [
  new Carta("Zeus", 20, 10, 90),
  new Carta("Poseidon", 5, 15, 150),
  new Carta("Atena", 3, 20, 150),
  new Carta("Ares", 5, 50, 50),
  new Carta("Ártemis", 10, 10, 100),
  new Carta("Hermes", 10, 15, 120),
  new Carta("Hera", 15, 5, 100),
  new Carta("Deméter", 5, 15, 150),
  new Carta("Hefesto", 20, 20, 70),
  new Carta("Apolo", 18, 15, 110),
];

class Luta {
  constructor(private _atacante: Carta, private _defensor: Carta) { }

  public get atacante(): Carta {
    return this._atacante;
  }
  public set atacante(atacante: Carta) {
    this._atacante = atacante;
  }
  public get defensor(): Carta {
    return this._defensor;
  }
  public set defensor(defensor: Carta) {
    this._defensor = defensor;
  }

  public atacar(): void {
    this._defensor.vida -= this._atacante.forca - (this._atacante.defesa * 0.2);
    console.log(`»»——————————　★　——————————««\n${this._atacante.nome} atacou ${this._defensor.nome}`);
    console.log(`Vida de ${this._defensor.nome}: ${this._defensor.vida}`);
    this.contraAtacar(this._atacante, this._defensor);
    console.table(this._defensor)
  }

  public contraAtacar(jogador1: Carta, jogador2: Carta): void {
    if (Util.chance(40)) {
      jogador1.vida -= jogador2.forca - (jogador1.defesa * 0.5);
      console.log(`${jogador2.nome} contra-atacou!`);
      console.log(`Vida de ${jogador1.nome}: ${jogador1.vida}\n`);
    } else {
      console.log(`${jogador1.nome} se esquivou do contra-ataque de ${jogador2.nome}\n`);
    }
  }

  public inimigoAtacar(): void {
    this._atacante.vida -= this._defensor.forca - (this._atacante.defesa * 0.2);
    console.log(`\n${this._atacante.nome} foi atacado por ${this._defensor.nome}`);
    console.log(`Vida de ${this._atacante.nome}: ${this._atacante.vida}`);
    this.contraAtacar(this._defensor, this._atacante);
    console.table(this._atacante)
  }
}

class Jogo {
  private _jogador1: Carta;
  private _jogador2: Carta;
  private _randomizado: boolean = false;

  constructor() {
    this._jogador1 = Util.randomizarCarta(cartas);
    this._jogador2 = Util.randomizarCarta(cartas);
  }

  public get jogador1(): Carta {
    return this._jogador1;
  }
  public set jogador1(jogador1: Carta) {
    this._jogador1 = jogador1;
  }
  public get jogador2(): Carta {
    return this._jogador2;
  }
  public set jogador2(jogador2: Carta) {
    this._jogador2 = jogador2;
  }
  public get randomizado(): boolean {
    return this._randomizado;
  }

  public darCartas(): void {
    const carta1 = cartas[Math.floor(Math.random() * cartas.length)];
    const carta2 = cartas[Math.floor(Math.random() * cartas.length)];
    this._jogador1 = carta1;
    this._jogador2 = carta2;
    this._randomizado = true;
  }

  public jogar(): void {
    const luta = new Luta(this._jogador1, this._jogador2);
    luta.atacar();
    luta.inimigoAtacar();
  }
}

function menu() {
  const jogo = new Jogo();
  jogo.darCartas();
  console.table(jogo.jogador1)
  console.table(jogo.jogador2)

  while (true) {
    const dado = new Dado(6);

    console.log("»»——————————　★　——————————««");
    console.log("");
    console.log("1--Rolar o dado");
    console.log("2--Atacar");
    console.log("3--Encerrar jogo");
    console.log("4--Mostrar personagens");
    console.log("");
    console.log("»»——————————　★　——————————««");

    const opcao = +write("Escolha uma opção: ");
    switch (opcao) {
      case 1:
        console.log(`\nO seu dado caiu em ${dado.jogar()}`);
        dado.sortearItem(jogo.jogador1);
        dado.sortearItem(jogo.jogador2);
        break;
      case 2:
        jogo.jogar();
        break;
      case 3:
        throw console.error("O jogo foi encerrado");
      case 4:
        console.table(jogo.jogador1);
        console.table(jogo.jogador2);
        break;
      default:
        console.log("Opção inválida");
        break;
    }
  }
}
menu();
