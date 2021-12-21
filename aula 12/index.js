
let varA = "A"; // b
let varB = "B"; // c
let varC = "C"; // a

const memoria1 = varA; // valor de A armazenado
const memoria2 = varB; // valor de B armazenado
const memoria3 = varC; // valor de C armazenado

varA = memoria2; // B
varB = memoria3; // C
varC = memoria1; // A

/*
UMA MANEIRA MAIS MODERNA DENTRO DO JS DE ALTERAR OS VALORES
SEM NECESSIDADE DE UTILIZAR MAIS MEMORIA SERIA

[ varA , varB , varC ]=[ varB , varC , varA ]

*/
console.log(varA, varB, varC);
