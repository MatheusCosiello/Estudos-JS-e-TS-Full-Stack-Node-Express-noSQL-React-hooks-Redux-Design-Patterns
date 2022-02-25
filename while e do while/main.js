// laço de while

// variavel de controle|controle inicia no 0 | i = index

/* let i = 0;
while (i <= 10) {     // condição
    console.log(i); // codigo
    i++
}; */

/*

laço de looping infinito

não contem o i++, logo a condição de  i meno ou igual a 10 sempre é verdadeira e o laço nunca
para de ser executado, fazendo assim navegadores e programas travar forçando o encerramento
do softwarer

let i = 0;

while (i<= 10){
    console.log(i);

};

*/

//para esse caso é mais recomendado utilizar FOR

/* const nome = 'Matheus';
let i = 0;                  //variavel de controle

while (i< nome.length){     // condição
    console.log(nome[i]); // codigo
    i++
}; */
//-----------------------------------------------------------------------------------
// caso mais real de utilização de while

// função q gera numero aleatorio


const min = 0;
const max = 50;
function random (min,max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

// executa o laço de while ate que rand seja igual a 10, não existe um limite para quantidade de tentativas
 
//while checa a condição e executa o seu bloco de codigo

let rand = random(min , max);       // necessario ser let pois sempre vai ter seu valor atualizado atraves do laço while
while (rand !==10){                 // condição         
    rand = random(min,max);         // bloco de codigo
    console.log(rand);
}
//---------------------------------------------------------------
//  exemplo de do while

const min = 0;
const max = 50;
let rand = 10;                          // vai ser alterado pelo laço logo no começp, enquanto no while serviria de trava

function random (min,max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

do {
    rand = random(min,max);         // bloco de codigo
    console.log(rand);
} while (rand !==10);   // condiciona

// while condicional depois executa bloco do codigo
// do while primeiro executa codigo do bloco depois checa condicional