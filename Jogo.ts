import { Dado, itens } from "./Dado";
import { Util } from "./Util";
const write = require("prompt-sync")();

export class Carta {
  constructor(
    private _nome: string,
    private _forca: number,
    private _resistencia: number,
    private _defesa: number,
    private _vida: number
  ) { }

  public get forca(): number {
    return this._forca;
  }
  public set forca(forca: number) {
    this._forca = forca;
  }
  public get resistencia(): number {
    return this._resistencia;
  }
  public set resistencia(resistencia: number) {
    this._resistencia = resistencia;
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
    if (vida <= 0) throw new Error("Vida não pode ser menor que 0");
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
  new Carta("Zeus", 10, 10, 10, 100),
  new Carta("Poseidon", 10, 10, 10, 100),
  new Carta("Atena", 10, 10, 10, 100),
  new Carta("Ares", 10, 10, 10, 100),
  new Carta("Ártemis", 10, 10, 10, 100),
  new Carta("Hermes", 10, 10, 10, 100),
  new Carta("Hera", 10, 10, 10, 100),
  new Carta("Deméter", 10, 10, 10, 100),
  new Carta("Hefesto", 10, 10, 10, 100),
  new Carta("Apolo", 10, 10, 10, 100),
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
    this._defensor.vida -= this._atacante.forca;
    console.log("»»——————————　★　——————————««\nVocê atacou " + this._defensor.nome);
    console.log(`Vida de ${this._defensor.nome}: ${this._defensor.vida}`);
    this.contraAtacar();
  }

  public contraAtacar(): void {
    if (Util.chance(40)) {
      this._atacante.vida -= this._defensor.forca;
      console.log(`${this._atacante.nome} contra-atacou!`);
      console.log(`Sua vida: ${this._atacante.vida}\n`);
    } else {
      console.log("Você se esquivou do contra-ataque de " + this._atacante.nome);
    }
  }

  public inimigoAtacar(): void {
    this._atacante.vida -= this._defensor.forca;
    console.log("\nVocê foi atacado por " + this._defensor.nome);
    console.log(`Sua vida: ${this._atacante.vida}`);
    this.contraAtacar();
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
    console.log(
      `Jogador 1: ${this._jogador1.nome} - ${this._jogador1.forca} - ${this._jogador1.resistencia} - ${this._jogador1.defesa} - ${this._jogador1.vida}`
    );
    console.log(
      `Jogador 2: ${this._jogador2.nome} - ${this._jogador2.forca} - ${this._jogador2.resistencia} - ${this._jogador2.defesa} - ${this._jogador2.vida}`
    );
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

  while (true) {
    const dado = new Dado(6);

    console.log("»»——————————　★　——————————««");
    console.log("");
    console.log("1--Rolar o dado");
    console.log("2--Atacar");
    console.log("3--Encerrar jogo");
    console.log("4--Testar item");
    console.log("5--Testar personagem");
    console.log("");
    console.log("6--Ver itens");
    console.log("");
    console.log("»»——————————　★　——————————««");

    const opcao = +write("Escolha uma opção: ");
    switch (opcao) {
      case 1:
        console.log(`O seu dado caiu em ${dado.jogar()}`);
        break;
      case 2:
        jogo.jogar();
        break;
      case 3:
        throw console.error("O jogo foi encerrado");
      case 4:
        dado.usarItem();
        break;
      case 5:
        console.table(jogo.jogador1);
        console.table(jogo.jogador2);
      case 6:
        console.log(itens)
      default:
        console.log("Opção inválida");
        break;
    }
  }
}
menu();
