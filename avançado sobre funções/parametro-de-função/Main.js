function funcao() {
    console.log(/*arguments[0]*/);
}
funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//------------exemplo 1------------------------

function funcaoExemplo1(a, b, c) {
    let total = 0;
    for (let argumentos of arguments) {
        total += argumentos;
    }
    console.log(total, a, b, c);
}
funcaoExemplo1(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // exibi 55
//-----------------exemplo 2 undefind--------------------

function undefinde(a, b, c, d, e, f, g) {
    console.log(a, b, c, d, e, f, g);
}
undefinde('valor', 1, 2, 3);
// exibi  valor 1 2 3 undefined undefined undefined
//--------------------exemplo 3--------------------
function soma(a, b) {
    // maneira mais atual  function soma(a , b = 0)
    //maneira antiga b = b || 0;
    console.log(a + b);
}

soma(2);
//------------------atribuição via destruturação---------------

function atribuição({ nome, sobreNome, idade }) {
    console.log(nome, sobreNome, idade);
};
atribuição({ nome: 'matheus', sobreNome: 'cosiello', idade: 29 });
//------------------------- exemplo  rest operator---------------------

function contas(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        acumulador += numero;
        // fazendo um laço q acumulador recebe soma de todos os numero dentro de rest
    }
    console.log(acumulador); // eixbi 150 que é a soma de todo ...numero
}
contas('+', 0, 10, 20, 30, 40, 50)
//---------------- exemplo rest operator part 2 ----------------function contas(operador,acumulador,...numeros){
function contas2(operador, acumulador, ...numeros) {
for (let numero of numeros) {
 if (operador === '+') acumulador += numero;
 if (operador === '-') acumulador -= numero; 
 if (operador === '*') acumulador *= numero; 
 if (operador === '/') acumulador /= numero;
}
console.log(acumulador);
}
contas2('-',0,2,4,6,8,10);