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
console.log(A,B,C);