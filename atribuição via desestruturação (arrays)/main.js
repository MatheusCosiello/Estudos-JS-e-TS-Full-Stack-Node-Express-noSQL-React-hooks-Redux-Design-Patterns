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
