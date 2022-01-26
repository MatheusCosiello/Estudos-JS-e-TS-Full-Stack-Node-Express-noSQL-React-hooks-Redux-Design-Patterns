// atribuição via desestruturação (arrays)

let A = 'a'; //C
let B = 'b'; //B
let C = 'c'; //A

//exemplo de desestruturação arrays
// o processo funciona da seguinte maneira
const numero = [1,2,3];
[A,B,C] = numero;
// maneira direta de ser feito tambem
[A,B,C]=[1,2,3]
//foi ATRIBUIDO a array atraves do seu indici um valor de variavel
console.log(A,B,C);// exibe 1 2 3
//-------------------------------------------------------------------
//                  part 2
//      indici  0 1 2 3 4 5 6 7 8
const numero = [1,2,3,4,5,6,7,8,9];

console.log(numero[0]); //eixibi numero 1

// utilizando este metodo podemos retirar coisas do array e ja jogar em uma variavel

//      indici  0 1 2 3 4 5 6 7 8
const numero = [1,2,3,4,5,6,7,8,9];
const [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero,segundoNumero); // exibe 1 , 2

// aqui foi atribuido o valor da variavel numeros as variaveis primeiroNumero, segundoNumero atraves do indici
//------------------------------------------------------------------------------------------
// operador rest ...
const numero = [1,2,3,4,5,6,7,8,9];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(resto); // exibe 3,4,5,6,7,8,9
//... é o operador rest ele capta todo restante da informação da array que não foi atribuida
//... tambem é chamado de spread quando é utilizado apra espalhar a informação
//----------------------------------------------------------------------------------------------
//                                  part 3
//      indici  0 1 2 3 4 5 6 7 8
const numero = [1,2,3,4,5,6,7,8,9];
const [primeiroNumero, segundoNumero, ,quartoNumero, ,sextoNumero] = numeros;
console.log(primeiroNumero,segundoNumero); // exibe 1 , 2 , 4 ,6
// podemos adicionar valor vazio dentro da atribuição para que possa pular um "numero" no indici
//-------------------------------------------------------------------------------------------------
//                                  part 4
//          inidici       0       1       2
//         sub-indici   0 1 2   0 1 2   0 1 2
const matrixNumerica= [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrixNumerica[1][2]); // exibi o numero 6
// podemo facilitar a leitura atraves da desestruturação
const [[lista1],[lista2],[lista3]] = matrixNumerica;
console.log(lista2[2]); //exibi o numero 6