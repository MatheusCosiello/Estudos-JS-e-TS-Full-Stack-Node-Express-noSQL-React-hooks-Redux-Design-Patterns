class Carro {
    constructor(nome, velocidade) {
        this.velocidade = 0;
        this.nome = nome;
    }
    acelera(){
        if(this.velocidade >= 100) return; // trava um limite maximo para velocidade
        this.velocidade++;
    }
    freia(){
        if(this.velocidade <= 0) return; // trava um limite maximo para freio
        this.velocidade--;
    }
}

const c1 = new Carro('fusca');

// simulando aceleração

for (let i =0; i<=200; i++){
    c1.acelera();
}

/* c1.velocidade = 1500;
console.log(c1);
Carro { velocidade: 1500, nome: 'fusca' } vamos evitar essa situação onde o limite de velocidade é quebrado */

//=======================================================================================

const velocidade_S = Symbol('velocidade');
class Carro2 {
    constructor(nome, velocidade) {
        this[velocidade_S] = 0;
        this.nome = nome;
    }

    set  velocidade(valor){
        console.log('utilizou setter');
        if (typeof valor !== "number") return;
        if(valor >= 100 || valor <=0 ) return;
    }

    get velocidade(){
        console.log('utilizou getter');
        return this[velocidade_S];
    }
    acelera(){
        if(this[velocidade_S] >= 100) return; // trava um limite maximo para velocidade
        this[velocidade_S]++;
    }
    freia(){
        if(this[velocidade_S] <= 0) return; // trava um limite maximo para freio
        this[velocidade_S]--;
    }
}

const c2 = new Carro2('fusca-vermelho');

// simulando aceleração

for (let i =0; i<=200; i++){
    c2.acelera();
}
c2.velocidade = 115; // não funciona pois a velocidade esta travada com  geter e seter de 0 a 100
console.log(c2.velocidade); // exibi 100

//------------------------------------------------------------------------------------------------------
class Pessoa {
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  
    get nomeCompleto() {
      return this.nome + ' ' + this.sobrenome;
    }
  
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    }
  }
  
  const p1 = new Pessoa('Matheus', 'Cosiello');
  p1.nomeCompleto = 'Matheus Cosiello';
  console.log(p1.nome);
  console.log(p1.sobrenome);
