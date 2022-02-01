// esqueleto para estrutura de repetição FOR

// para que a estrutura de repetição possa funcionar precisamos criar dentro dele
// dentro do parenteses
// 1 criar uma  variavel de controle
// 2 crair uma condição que faz ele parar
// 3 incrementar ou decrementar o laço
//  1 i = index     |2condição|     3incremento
for (let i = 0;      i <= 5;         i++) {
console.log(i);
};          
/*                      part 2
utilizamos a parte do for para controlar o nosso laço

podemos determinar o inicio da contagem em qualquer numero na variavel
podemos determinar o final em nossa condicional
podemos determinar como vai ser feita a contagem em nosso incremento/decremento
                abaixo exemplo
*/
for (let i = 0;      i <= 500;         i+=10) {
    console.log(`Linha${i}`); // exibi contagem de linhas apartir de 0 a 500 contando de 10 em 10
    };