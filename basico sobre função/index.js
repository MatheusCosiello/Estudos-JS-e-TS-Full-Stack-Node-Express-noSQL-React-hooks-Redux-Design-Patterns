
function saudacao(nome) { // FUNCTION NOME DA FUNCTION (PARAMETRO)

    console.log(`Bom dia ${nome}!`); // bloco do codigo dentro de function saudacao

}

saudacao(`Matheus`); // chamada da função + parametro nome exibindo Bom dia Matheus.

//---------------------------------------------------------------------------------
function saudacao(nome) {

    console.log(`Bom dia ${nome}!`);
}

const variavel = saudacao(`Matheus`);
console.log(variavel);
// retorna undefined por padrao do java scrip pois 
//não esta dizendo que deseja retonar mesmo salvando info na memoria
//------------------------------------------------------------------------------------------
function saudacao(nome) {  // function nomeFuncition(parametro){

    return (`Bom dia ${nome}!`); // Bloco de codigos a serem executados
}

const variavel = saudacao(`Matheus`); // variavel nomeVariavel = function(dados do parametro)
console.log(variavel); // retorna na tela de usuario a execução da funçao contida dentro da variavel
//----------------------------------------------------------------------------------------   
// minha primeira function sozinho 

function soma(x, y) {  // tambem posso criar valores padrao recebidos por padrao (x = 1, y = 1)

    const resultado = x + y;
    return (x + y);
}
console.log(soma(2,2));
//------------------------------------------------------------------------------------------
 // EXEMPLO DE FUNÇÃO ANONIMA

const raiz = function (N) {
    return N ** 0,5;
};
console.log(raiz(25));
//----------------------------------------------------------------------------------------

// EXEMPLO DE ARROW FUNCTION 
// é utilizado para  simplificara vida de um dev

const raiz = (N) => {
    return N ** 0,5;
};
console.log(raiz(25));

// tambem escrito 
 const raiz = (numeroRaiz) => numeroRaiz ** 0.5;

 console.log(raiz(25));

//-------------------------------------------------------------------------------------------

