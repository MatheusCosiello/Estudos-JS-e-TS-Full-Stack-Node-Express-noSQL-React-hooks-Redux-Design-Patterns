// foreach


const numeros = [0 , 50 , 1 , 71 , 2 , 17 , 3 , 4 , 5, 9 , 10 , 500 , 12 , 6 , 7 , 25 , 80];

// iteração padrao for of


for (let valor of numeros){
    console.log(valor);
}

// iteração com foreach

numeros.forEach(function(valor,indice,array){
console.log(valor,indice);
});

// refactory 
// para usar arrow function aqui so podemos utilizar um parametro no nesse caso valor
numeros.forEach (valor =>{console.log(valor);});

// exemplo de soma com foreach
const numeros2 = [0 , 50 , 1 , 71 , 2 , 17 , 3 , 4 , 5, 9 , 10 , 500 , 12 , 6 , 7 , 25 , 80];

let total = 0;

numeros2.forEach (valor =>{total += valor});
console.log(total); // exebi 802