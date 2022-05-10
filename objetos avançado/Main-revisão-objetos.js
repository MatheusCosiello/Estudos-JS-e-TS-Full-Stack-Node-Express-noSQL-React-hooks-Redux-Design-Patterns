const pessoa = {
    nome: 'Matheus', // pares de chave do objeto
    SobreNome: 'Cosiello'
};
// maneira de acessar pares de chave de objetos
// os 2 funcionam da mesma maneira  exibindo os valores de pares de chave Matheus Cosiello
console.log(pessoa['nome'],pessoa['SobreNome']);
console.log(pessoa.nome,pessoa.SobreNome);

// acesso dinamico de valor do objeto

const chaveDinamica = 'nome';
console.log(pessoa[chaveDinamica]); // exibi nome

// utilizando construtor do objeto

const pessoa2 = new Object(); // constrindo o novo objeto
pessoa2.nome = 'Luiz';          // atribundi valor ao par de chaves via notação de ponto
pessoa2.SobreNome = 'Otavio';

console.log(pessoa2.nome,pessoa2.SobreNome); // exibi Luiz Otavio

console.log(pessoa2,pessoa); // exibi os objetos 

// apagando par de chave de um objeto

const pessoa3 = {
    nome: 'Felipe',
    SobreNome: 'Miranda'
};

delete pessoa3.nome; // apagou o par de chaves  nome: 'Felipe'
console.log(pessoa3); // exibi { SobreNome: 'Miranda' }



//-----------------------------------------------------------------



/* objetos podem conter metodos
metodos = funções dentro de objetos a vatangem de fazer isso
é ter acesso a coisas de dentro do objeto
*/
const pessoa4 = new Object(); 
pessoa4.nome = 'Luiz';          
pessoa4.SobreNome = 'Otavio';
pessoa4.idade = 30;
pessoa4.falarNome = function(){return (`${this.nome} esta falando seu nome`)}; //função que o nome do objeto

pessoa4.dataNascimento = function (){
    const dataAtual = new Date(); // pega o Date com a data atual
    return dataAtual.getFullYear() - this.idade; // subtrai ano do objeto Date com a idade do objeto pessoa4
}

console.log(pessoa4.falarNome());
console.log(pessoa4.dataNascimento());

// para um objeto amis compleso podemos utilizar um laço for e ver todas suas chaves e seus valores
for (let chave in pessoa4){
    console.log(chave);
}
// exibindo os valores das chaves

for (let valorChaves in pessoa4){
    console.log(pessoa4[valorChaves]);
}
//------------------------------------------------------------------------------------------------------
// criando objeto com função construtora

function Cliente(nome,sobrenome){
this.nome = nome,
this.sobrenome = sobrenome

Object.freeze(this); // travando qualquer alteração do objetoo
}

const Cliente1 = new Cliente('Matheus','Cosiello');
console.log(Cliente1); // exibi Cliente { nome: 'Matheus', sobrenome: 'Cosiello' }

// não pode esquecer de usar o new na função construtora
// função construtura sempre usa Letra Maiuscula na primeira letra

// oq faz o new ?

/*
cria objeto vazio
assimila o comando this de cada objeto gerado a ele mesmo
tambem exibi o construtor desse objeto
console.log(Cliente1); // exibi Cliente { nome: 'Matheus', sobrenome: 'Cosiello' }
construtor é Cliente            ^^^^^^^
*/

