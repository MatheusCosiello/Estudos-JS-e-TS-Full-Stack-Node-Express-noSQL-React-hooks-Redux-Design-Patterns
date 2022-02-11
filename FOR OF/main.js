const numerosENomes = [0,1,2,3,4,'felipe']

for (let i = 0;  i < numerosENomes.length; i++){
    console.log(numerosENomes[i]);
}
// for classico retornando os valores da const array

console.log("########");

for (let i in numerosENomes){
    console.log(numerosENomes[i]);
}

// for in retornando valores a partir do indice

console.log("########");

for (let valores of numerosENomes){
    console.log(valores);
}

// for of retornando so os valores diretamente
console.log("########");
//----------------------------------------------------------
// resumo dos FOR

/*
FOR CLASSICO - Geralmente com iteraveis (arrays e strings)
FOR IN - retorna o o indice ou chaves (array, string, objetos)
FOR OF - retorna apenas o valor em si (iteraveis, arrays ou strings)
*/

