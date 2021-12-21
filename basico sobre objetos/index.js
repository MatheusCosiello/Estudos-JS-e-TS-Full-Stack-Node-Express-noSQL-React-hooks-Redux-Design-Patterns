// exemplo de objeto
const pessoa2 = { 
    nome : "matheus",
    idade : 29,
    email : "matheus@gmail.com",
};

console.log(pessoa2.nome); // .nome chama o parametro dentro do objeto par trazer o argumento p tela

//------------------------------------------------------------------------------------------------
// function que cria objetos -- FACTORY FUNCTION
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome : nome,
        sobrenome : sobrenome,
        idade : idade
    };
}
const pessoa1 = criaPessoa("Cosiello", "Matheus",29);
console.log(pessoa1.idade);
//-------------------------------------------------------------------------------------------------
//  tambem escrever de maneira mais simples a repetição, o proprio JS compreendo oque tem que ser feito
function criaPessoa2 (nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
}
//-----------------------------------------------------------------------------------------------
// METODO É QUANDO FUNCTION  ESTA CONTIDA DENTRO DE UM OBJETO
const pessoa3 = { 
    nome : "matheus",
    idade : 29,
    sobrenome : `Cosiello`,

    fala() {  console.log(`Olá mundo`) }
};

pessoa3.fala();

//------------------------------------------------------------------------------------------------
// um exemplo de como eu posso manipular itens dentro do objeto usando this
const pessoa3 = { 
    nome : "matheus",
    idade : 29,
    sobrenome : `Cosiello`,

    fala() {  console.log(`Olá mundo eu tenho ${this.idade} anos`) },

    icrementaidade(){
        this.idade++;
    }

};

pessoa3.fala();
pessoa3.icrementaidade();
pessoa3.fala();
//--------------------------------------------------------------------------------------------------
