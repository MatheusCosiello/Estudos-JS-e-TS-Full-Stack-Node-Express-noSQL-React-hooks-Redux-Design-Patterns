// new object -> object.prototype

const objA = {
    ChaveA: 'a'
    //__proto__ === object.prototype
};

// new object -> object.prototype

const objB = {
    ChaveB: 'b'
    //__proto__ = const objA ?
}
/*
// convertendo o A em proto do objeto B
Object.setPrototypeOf(objB,objA);
console.log(objB.ChaveA); // exibi A

// o objA foi convertido para prototype de objB
//__proto__ = const objA 
*/

const objC = new Object();
objC.ChaveC = 'C';

// criando uma cadeira de proto
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
// dessa maneira dentro de Object C podemos chamar ChaveA,ChaveB,ChaveC

/*
object C
__proto__: object B
        Object B
            __proto__: Object A
                Object A
                    __proto__: Object.Prototy
*/

// NÃO UTILIZE A PROPRIEDADE __PROTO__
//SEMPRE UTILIZE Object.setPrototypeOf() E Object.getPrototypeOf()

//----------------------------------------------------------------------------------------------------------------

// Construtora
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

    // não criar metodo aqui
}

// criando metodo no prototype da função

// metodo de desconto (dentro do proto do objeto) %
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

// metodo de acréscimo de preço (dentro do proto) %
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('camiseta', 50); // exibi Produto { nome: 'camiseta', preco: 50 }
//p1.aumento(10);  
//console.log(p1); // exibi Produto { nome: 'camiseta', preco: 55 }

// COmo reaproveitar os metodos do proto de p1 para p2 levando em consideração que p2 foi criado de maneira literal

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
  };

// setando Prototype de p1 para p2
                // de Construtora Produto para p2
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(100);
console.log(p2); // exibi  Produto { nome: 'Caneca', preco: 30 }


// criando o objeto e setando seu 'pai' -> Produto.prototype e adicionando de maneira opicional PropertyDescription 
const p3 = Object.create(Produto.prototype, {
    preco: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 99
    },
    tamanho: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 42
    },
  });
  p3.aumento(10); 
  console.log(p3); //exibi  Produto { preco: 108.9, tamanho: 42 }
