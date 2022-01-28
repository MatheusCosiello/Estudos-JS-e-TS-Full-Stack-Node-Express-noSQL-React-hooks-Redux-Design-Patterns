
// objeto pessoa com objeto interno enderço
const pessoa = {
    nome :'Matheus',
    sobreNome :'Cosiello',
    idade: 29,
    endereco : {
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
// tambem podemos atribuir um vamor diretamente a desestruturação
// desde que a variavel esta definida com oundefined
const {nome = "Luiz", sobreNome, idade} = pessoa;
console.log(pessoa); // exibi Luiz, cosiello, 29

//tambem podemos mudar o nome de uma variavel
const {nome:teste, sobreNome, idade} = pessoa;
console.log(teste,idade); // exibi Matheus, 29
// agora variavel nome1 se chama teste
//--------------part 3---------------------------------
// para utilizar os dados do objeto endereco que esta contido dentro do objeto pessoa
//utilizamos a seguinte linhas de codigo
const {endereco:{rua,casa}} = pessoa;
console.log(rua,casa); // exibi rua 1 casa 123
//--------------part 4-----------------------------------
//-- tambem podemos utilizar o operador ...rest
const {nome, ...rest} = pessoa;
console.log(nome,rest); // exibi Matheus, {todas as outras informações de pessoa}
