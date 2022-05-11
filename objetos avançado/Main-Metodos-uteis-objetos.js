// metodos uteis para objetos

/* ja vistos anteriormente
object.keys(retorna chaves do objeto como array)
object.freeze(congela objeto e/ou proriedade/propriedades)
object.definePropeties( define varias propriedades)
object.defineProperty(defini uma unica propriedade)
*/

/*  object.value
    object.entries
    object.assign(des,any)
    object.getOwnPropertyDescription(o, 'prop')
    ...(spread)
*/
// objetos são valores passador por referencias


// como copiar um objeto ?

// aqui o objeto foi apenas linkado por referencia e aponta par o mesmo local na memoria, NÃO FOI COPIADO
const produto = {nome : 'caneca', preco:2.80};
const outroProduto = produto;
/* produto.nome = 'garfos';
console.log(outroProduto);  exibi { nome: 'garfos', preco: 2.8 } */

// para copiar o valor da memoria para um novo objeto utiliza ...spread operator

const produtoCopia = {...produto,
material:'porcelana'};
produtoCopia.nome = 'copos';
produtoCopia.preco = 5.20;
console.log(produto);   // exibi { nome: 'caneca', preco: 2.8 }
console.log(produtoCopia); //exibi { nome: 'copos', preco: 5.2 }
//-----------------------------------------------------------------------
//  Object.assign

// traz as informações de um objeto apra dentro do outro similar ao spread
const canecas = Object.assign({},produto);
console.log(canecas); // exibi { nome: 'caneca', preco: 2.8 }

// tambem é possivel copiar atributo de um objeto
const canecas2 = {nome : canecas.nome,preço:canecas.preco};
console.log(canecas2);// { nome: 'caneca', 'preço': 2.8 }
//--------------------------------------------------------------------------------
// observando as  Propertys de uma chave de um objeto
const pessoa = {nome:'matheus', altura:1.72};
console.log(Object.getOwnPropertyDescriptor(pessoa,'nome'));

/*exibi
 nome: {
    value: 'matheus',
    writable: true,
    enumerable: true,
    configurable: true
  }

*/
//----------------------------------------------------------------------------------
// lendo apenas os valores do objeto
console.log(Object.values(pessoa)); // exibi [ 'matheus', 1.72 ]
// em array 
console.log(Object.entries(pessoa));  // exibi [ [ 'nome', 'matheus' ], [ 'altura', 1.72 ] ]

// é possivel iterar cl enties

for (let [chave, valor] of Object.entries(pessoa)){
    console.log(chave, valor);
}
//exibi 
/*
nome matheus
altura 1.72
 */

// maneira mais simples de fazer o mesmo for

for (let [valor] of Object.entries(pessoa)){
    console.log(valor[0], valor[1]);
}