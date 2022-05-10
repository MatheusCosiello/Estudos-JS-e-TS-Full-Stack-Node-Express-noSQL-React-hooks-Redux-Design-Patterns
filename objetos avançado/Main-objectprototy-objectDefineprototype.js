//define Property - DefineProperties

function Produto (nome,preco,estoque){
this.nome = nome,
this.preco = preco,

Object.defineProperty(this, 'estoque', {
enumerable: true,   // defini se a propriedade invocada deve ser enumerada  (mostra a chave)
value : estoque,    // atrela seu valor (valor)
writable :false,    // defini se o valor da propriedade pode ser alterado (pode alterar ?)
configurable:false   // posso redefinir as configurações do objeto ? (configuravel)
 })};

const p1 = new Produto ('camiseta',20,3);
p1.estoque = 50000;
delete p1.estoque;
console.log(p1); // exibi Produto { nome: 'camiseta', preco: 20, estoque: 3 }
/*
 Object.defineProperty esta definido de maneira que nao permite alteração no estoque
 não permite reconfiguração(delete p1.estoque não funciona)
*/

console.log(Object.keys(p1));  // exibi [ 'nome', 'preco', 'estoque' ]
// exibi os pares de chave enumeraados de um objeto
// caso enumerable : false no objeto p1 preço não seria listado


// ------------------------------------------------------------------
// exempo de  DefineProperties

// funciona de maneira similar porem para uma lista de propriedades do objetos

function Produto2 (nome,preco,estoque){
 
    Object.defineProperties(this,{
        nome:{
            enumerable: true,   
            value : nome,    
            writable :false,    
            configurable:false  
        },
        preço: {
            enumerable: true,  
            value : preco,    
            writable :false,    
            configurable:false   
        },
        estoque:{
            enumerable: true,   
            value : estoque,    
            writable :false,    
            configurable:false  

        }
    });
};

     const p2 = new Produto ('calças',20,3);
     console.log(p2);
     console.log(Object.keys(p2));

     /*
     nosso codigo fica muito mais verboso e complexo
    porem traz um controle maior sobre o objeto e suas propriedades
    muito util para objetos sensiveis
     */