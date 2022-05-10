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

const produtoCopia = {...produto};
produtoCopia.nome = 'copos';
produtoCopia.preco = 5.20;
console.log(produto);   // exibi { nome: 'caneca', preco: 2.8 }
console.log(produtoCopia); //exibi { nome: 'copos', preco: 5.2 }
