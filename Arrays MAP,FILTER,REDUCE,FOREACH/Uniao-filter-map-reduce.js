// como unir filter + map + reduce

//retorne a soma de todos os pares
//filtra os pares
//dobra os valores
//reduzir (somar)

const numeros = [0 , 50 , 1 , 71 , 2 , 17 , 3 , 4 , 5, 9 , 10 , 500 , 12 , 6 , 7 , 25 , 80];

const numerosPares = numeros.filter(function(valor){
return valor % 2 === 0 ;
}).map(function (valor){
return valor * 2;
}).reduce(function(acumulador,valor){
 acumulador += valor;
 return acumulador;
},0);

//1328 soma
//  0,  100,  4,  8,20, 1000, 24, 12, 160 dobro
// 0, 50, 2,  4, 10, 500, 12, 6, 80 par
console.log(numerosPares);

//refactory

const numerosParesR = numeros
.filter(valor => valor % 2 === 0 )
.map( valor => valor * 2)
.reduce((acumulador,valor) => acumulador += valor);
console.log(numerosParesR);