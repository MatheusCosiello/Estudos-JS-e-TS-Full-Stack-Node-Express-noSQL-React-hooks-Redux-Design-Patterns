// esqueleto para estrutura de repetição FOR

// para que a estrutura de repetição possa funcionar precisamos criar dentro dele
// dentro do parenteses
// 1 criar uma  variavel de controle
// 2 crair uma condição que faz ele parar
// 3 incrementar ou decrementar o laço
//  1 i = index     |2condição|     3incremento
for (let i = 0; i <= 5; i++) {
    console.log(i);
};
/*                      part 2
utilizamos a parte do for para controlar o nosso laço

podemos determinar o inicio da contagem em qualquer numero na variavel
podemos determinar o final em nossa condicional
podemos determinar como vai ser feita a contagem em nosso incremento/decremento
                abaixo exemplo
*/
for (let i = 0; i <= 500; i += 10) {
    console.log(`Linha${i}`); // exibi contagem de linhas apartir de 0 a 500 contando de 10 em
};

//                        exemplo de decrementação

for (let i = 500; i >= 400; i -= 10) {
    console.log(`Linha${i}`); // exibi contagem de linhas apartir de 500 are 400 contando de 10 em
};

//                                  part 3
// um exemplo de uso para for e laço de repetição, verificar se o umero é par ou não

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar'; // adicionando estrutura ternaria
    console.log(i, par);
};
/*Exibit 
 0 true 0 par
1 false 1 impar
2 true  2 par
3 false 3 impar
4 true  4 par
5 false 5 impar
6 true  6 par
7 false 7 impar
8 true  8 par
9 false 9 impar
10 true 10 par 
*/
//                                  part 4
//   podemos percorrer um array utilizando FOR
const frutas = ['pera', 'uva', 'banana'];
for (let i = 0; i = array.length; i++) {
    console.log(`indice${i}`,frutas[i]);
};
// exibi 0 1 2 que são os index do array e os valores de cada indice