// função construtora -> cria objetos
// função fabrica -> cria objetos

// Construtora -> Pessoa (new) uso obrigatorio de new

function Pessoa (nome, sobrenome){
  
 // atributos ou metodos privados - não podem ser acessados fora da function e so existem dentro dela

 const iD = 1234;
 const metodoInterno = function (){console.log(iD)};

  // atributos ou metodos publicos

    this.nome = nome;
    this.sobrenome = sobrenome;

// aqui o this aponta para a pessoa que chamar ele
 //  exemplo p1.metodo(); this aponta para p1
    this.metodo = () => {console.log(this.nome + ' sou o metodo');
};
}

const p1 = new Pessoa ('Matheus','Cosiello');
const p2 = new Pessoa ('Mateus','Hernandes');

p1.metodo();

// nesse caso o new cria um objeto vazio a partir da function Pessoa
// faz o this apontar intricicamente para esse objeto e retornar essa variavel
// não seria necessario o return