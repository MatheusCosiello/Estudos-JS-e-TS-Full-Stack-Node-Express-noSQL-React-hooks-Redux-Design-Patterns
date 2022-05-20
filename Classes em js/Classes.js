// basicamente classes são a mesma coisa que funções construtoras

//  caso necessario passar os parametros da classes utilizamos constructor (){} metodo especial

class Pessoa {
    // parametro da classe 
    constructor (nome,sobrenome){ 
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
// de maneira simples sem virgulas e sem ponto e virgula
// estes metodos ja foram automaticamente lincado ao prototype dessa class
    falar(){
        console.log(`${this.nome} está falando....`);
    }
}
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  
  Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
  };
  
  
const p1 = new Pessoa('Matheus','Cosiello');
const p2 = new Pessoa2('Luiz', 'Miranda');

console.log(p1.falar());
console.log(p2.falar());
