// Produto - abstração aumento e desconto
// camiseta = cor, caneta=material
// Construtora
function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}
// metodos dentro do proto de Produto

// aumento
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
// Desconto
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}
// csontrutora camiseta 

// call  passa quem deve ser o this dessa função 
// nesse caso Produto é This de Camiseta
function Camiseta(nome, preco, cor){
    Produto.call(this,nome,preco);  // herdando propriedade de produto
    this.cor = cor; // caracteristica propria
}

// é necessario linkar o proto de produto com camiseta

// criando objeto produto dentro do proto de Camiseta
Camiseta.prototype = Object.create(Produto.prototype);
// Determina que a função construtora de camiseta é cosntrutora Camiseta
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
  };
  
  function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
  
    Object.defineProperty(this, 'estoque', {
      enumerable: true,
      configurable: false,
      get: function() {
        return estoque;
      },
      set: function(valor) {
        if (typeof valor !== 'number') return;
        estoque = valor;
      }
    });
  }

  // linkando protos objeto Produto no proto camiseta
  // detrminando a construtora de Caneca
  Caneca.prototype = Object.create(Produto.prototype);
  Caneca.prototype.constructor = Caneca;
  
  const produto = new Produto('Gen', 111);
  const camiseta = new Camiseta('Regata', 7.5, 'Preta');
  const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
  caneca.estoque = 100;
  
  console.log(caneca.estoque);
  console.log(caneca);
  console.log(camiseta);
  console.log(produto);