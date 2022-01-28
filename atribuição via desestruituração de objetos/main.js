
// objeto pessoa com objeto interno enderço
const pessoa = {
    nome :'Matheus',
    sobreNome :'Cosiello',
    idade: 29,
    endereço : {
        rua : 'rua 1',
        casa : 123
    }
};
const nomeDaPessoa = pessoa.nome;
console.log(nomeDaPessoa); // exibi nome matheus

//---------part 2-----------------
// atribuição via desestruturação

const {nome} = pessoa;
console.log(pessoa); //exibi nome da pessoa Matheus
// tambem podemos adicionar mais variaveis

const {nome, sobreNome, idade} = pessoa;
console.log(pessoa); // exibi matheus, cosiello, 29