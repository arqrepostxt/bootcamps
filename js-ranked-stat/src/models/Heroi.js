export class Heroi {

  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = this.heroAtk();

  }

  heroAtk() {
    if (this.tipo == "mago") {
      return "magia";
    } else if (this.tipo == "guerreiro") {
      return "espada";
    } else if (this.tipo == "monge") {
      return "artes marciais";
    } else if (this.tipo == "ninja") {
      return "shuriken";
    }
  }
  
  atacar() {
    let menssagem = `o ${this.tipo} atacou usando ${this.ataque}`;
    console.log(menssagem);
    }
  
  getAtaque() {
    return this.ataque;
  }
  
}