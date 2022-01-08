// Valores Primitivos (imutaveis)
// string - number - boolean - undefined - null - (bigint - symbol) - valor
// Valores Copiados

//Valores de dados por Referencia (mutaveis) Arrays - Objetos - Function
// Valores passado por referencia na memoria

let nome = "Luiz";
nome[0] = "R";
console.log(nome[0], nome);

// o indici 0 de nome não foi alterado para R pois a string é um valor imutavel

let a = "A";
let b = a; // copia de variavel a
console.log(a,b);

a = "outro valor";
console.log(a,b);
 // valor de a foi alterado porem o valor de B não, pois a copia do valor foi passado antes da alteração.
//----------------------------------------------------------------------------------------------
//Valores de dados por Referencia (mutaveis) Arrays - Objetos - Function

let Arrays1 = [1, 2 ,3];
let Memoria1 = Arrays1;
console.log(Arrays1,Memoria1);

Arrays1.push(4);

console.log(Arrays1,Memoria1);
// aqui estamos passando uma referencia da memorria Arrays1 esta apontando para [1, 2 ,3 ]
// Memoria! esta apontando para [1, 2 ,3 ]

Memoria1.pop();
console.log(Arrays1,Memoria1); 
// esta alterando o valor que Arrays1 exibe, pois esta alterando 
// diretamente a memoria onde esta escrito [1, 2 ,3 ]

//-----------------------------------------------------------------------------------------
const Cadastro = {
    NomeCliente : "Matheus",
    sobreNome : "Cosiello"
};

const CadastroCopia = {...Cadastro}; 
//  {...Cadastro} esta fazendo uma copia do valor Cadastro dentro
// da constante CadastroCopia

CadastroCopia.nome = "Matheus2";
console.log(Cadastro);
console.log(CadastroCopia);


