// for padrao
const fruits = ['maça','banana','pera','uva'];

for (let i = 0; i < fruits.length;i++){
    console.log(fruits[i]);
}
//--------------------------------------------------------------------
// for in faz a leitura dos indices ou chaves do objeto

for (let i in fruits){
    console.log(fruits[i]); // retorna a leiturra dos indices 0 1 2 3 e seus valore
}
//---------------------------------------------------------------------
// exemplo de for in com objetos
const user = {
    nome:'Matheus',
    sobrenome:'COsiello',
    idade : 29
};

for (let keys in user){
    console.log(keys);        // retorna as chaves do objetos nome sobrenome idade
}
// exemplo de como acessar valores de maneira dinamica em um objeto

console.log(user.nome); // exibi o valor de nome, identido ao metodo de array
console.log(user["nome"]); // tambem exibi o valor de nome