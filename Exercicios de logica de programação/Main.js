// escreva uma function que recebe 2 numero e retorna o maior deles

function comparaN(N1, N2) {
    if (N1 > N2) return N1;
    return N2;
}

console.log(comparaN(4, 3)); // exibi 4

// refactory 1  operaçao ternaria aplicada

function comparaN2(N1, N2) {
    return N1 > N2 ? N1 : N2;
    // se n1 maior q n2 retorna n1 senao n2
}
console.log(comparaN2(10, 3)); // exibi 10

// refactory 2 arrow function

const max = (N1, N2) => N1 > N2 ? N1 : N2;;
console.log(max(100, 5)); // exibi 100
//--------------------------------------------------
/* escreva uma função chamada ePaisagem que recebe 2 argumento
largura e altura de uma imagem (number) 
retorna true se a imagem estiver no modo paisagem */


const ePaisagem = (largura, altura) => largura > altura ? true : false;
console.log(ePaisagem(1280, 1024));

// nesse caso podemos retirar a a parte de true e false pois
// o js naturalmente ja responderia se acondição é verdadeira o ou falsa

// refactory 1

const ePaisagem2 = (largura, altura) => largura > altura;
console.log(ePaisagem2(1280, 1024));

//---------------------------------------------------------------------------
// parte 3 do exercicio | exercicio Bizz e Buzz

/* escreva uma função que recebe um numero
    retorne o seguinte
    numero é divisivel por 3 = fizz
    numero é divisivel por 5 = Buzz
    numero é divisivel por 3 e 5 = fizzBuzz
    numero não é divisivel por 3 e 5 = retorna o prorio numero
    checa se o numero é mesmo um numero = retorna o proprio numero
    use a função com numero de 0 a 100
 */

function fizzBuzzGen() {

    let xNumber = 0;

    while (xNumber <= 100) {
        if ((xNumber % 3 == 0) && (xNumber % 5 == 0)) { console.log(xNumber, "fizzBuzz"); }
        else if (typeof xNumber !== "number") { console.log(xNumber) }
        else if ((xNumber % 3 !== 0) && (xNumber % 5 !== 0)) { console.log(xNumber, xNumber); }
        else if (xNumber % 3 == 0) { console.log(xNumber, "fizz"); }
        else if (xNumber % 5 == 0) { console.log(xNumber, "Buzz"); }
        xNumber++
    };
};

fizzBuzzGen()
//----------------------------------- resposta alternativa

function fBG(numero){
    if (typeof numero !== "number") return numero;
    if ((numero % 3 == 0) && (numero % 5 == 0)) return "fizzBuzz";
     if (numero % 3 == 0) return "fizz";
     if (numero % 5 == 0) return "buzz";
     return numero;
}

console.log('a',fBG('a'));
for (let i = 0; i <= 100; i++){
    console.log(fBG(i));
}
