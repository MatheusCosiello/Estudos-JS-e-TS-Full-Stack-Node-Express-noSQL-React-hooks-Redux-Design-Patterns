//filter map reduce
//--------------------------Map----------------------------

// dobre os valores de numeros
//      index    0    1   2    3   4    5   6   7   8  9   10    11   12  13  14   15   16
const numeros = [0 , 50 , 1 , 71 , 2 , 17 , 3 , 4 , 5, 9 , 10 , 500 , 12 , 6 , 7 , 25 , 80];

// info da array numeros na chamada de callback
const numerosInfo = numeros.map(function(valor,indice,array){
    console.log(valor,indice,array);
});


// dobrando 
const numerosDobro = numeros.map(valor => valor * 2 );
console.log(numerosDobro);


//------------------------------------exemplo pratico-------------------------------------------
// para cada elemento
// retorne apenas uma string com nome da pessoa
// remova apenas a chave nome do objeto
// adicione uma chave iD em cada objeto(usar index como ID)

const pessoas =[
    {nome:'Luiz', idade :62},
    {nome:'Maria', idade :23},
    {nome:'Eduardo', idade :55},
    {nome:'Leticia', idade :19},
    {nome:'Rosana', idade :32},
    {nome:'wallace', idade :47},
];

const nomesPessoas = pessoas.map(obj => obj.nome);
console.log(nomesPessoas);

const idadePessoas = pessoas.map(obj => ({idade:obj.idade}));
console.log(idadePessoas);

const iDPessoas = pessoas.map(function (obj, indice){
    const newObj = {...obj};    // sempre criar um novo obj para nao afetar o original pois array trabalhar com valor por referencia
    newObj.id = indice;
    return newObj;
});

console.log(iDPessoas);
console.log(pessoas);