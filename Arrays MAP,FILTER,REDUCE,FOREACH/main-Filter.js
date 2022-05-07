
//filter map reduce
//--------------------------filter----------------------------
// filter - filtrando array funciona apenas em arrays -retonra sempre uma array com mesma quantidade ou menos
// de elementos de uma array
// filtra array

// retorne os numeros maiores que 10
//      index    0    1   2    3   4    5   6   7   8  9   10    11   12  13  14   15   16
const numeros = [0 , 50 , 1 , 71 , 2 , 17 , 3 , 4 , 5, 9 , 10 , 500 , 12 , 6 , 7 , 25 , 80];

const numerosFiltrados = numeros.filter( valor=> valor> 10); // retorna diretamente true ou false { ja foi feito refactory}

console.log(numerosFiltrados);


//------------------------------------exemplo pratico-------------------------------------------
// retorne as pessoas que tem nome com mais de 5 letras
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com A

const pessoas =[
    {nome:'Luiz', idade :62},
    {nome:'Maria', idade :23},
    {nome:'Eduardo', idade :55},
    {nome:'Leticia', idade :19},
    {nome:'Rosana', idade :32},
    {nome:'wallace', idade :47},
];
                                        // arrow function
const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoas50AnosMais = pessoas.filter(obj => obj.idade > 50);
const pessoasLetraAFinal = pessoas.filter(obj => obj.nome.endsWith('a'));
console.log(pessoasLetraAFinal);
