// reduce
// reduz seu array a um unico elemento

// Some todos os numero (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)


//      index    0    1   2    3   4    5   6   7   8  9   10    11   12  13  14   15   16
const numeros = [0 , 50 , 1 , 71 , 2 , 17 , 3 , 4 , 5, 9 , 10 , 500 , 12 , 6 , 7 , 25 , 80];

const total = numeros.reduce(function(acumulador,valor,indice,array){
acumulador += valor;
return acumulador;
}, 0);
console.log(total);

const numerosPar = numeros.reduce(function(acumulador,valor,indice,array){
if (valor % 2 === 0 ) acumulador.push(valor) ;
return acumulador;
},[]);

console.log(numerosPar);

const dobraNUmeros = numeros.reduce(function(acumulador,valor,indice,array){
    acumulador.push(valor * 2) ;
    return acumulador;
    },[]);

 console.log(dobraNUmeros);

 //----------------------exemplo mais Elaborado de Reduce-------------------------
 // retorne a pessoa mais velha

 const pessoas =[
    {nome:'Luiz', idade :62},
    {nome:'Maria', idade :23},
    {nome:'Eduardo', idade :55},
    {nome:'Leticia', idade :69},
    {nome:'Rosana', idade :32},
    {nome:'wallace', idade :47},
];

const maisVelho = pessoas.reduce(function(acumulador,valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;

});

console.log(maisVelho);