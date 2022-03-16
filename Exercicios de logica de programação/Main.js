// escreva uma function que recebe 2 numero e retorna o maior deles

function comparaN(N1 , N2 ) {
    if (N1 > N2 ) return N1; 
    return N2;
}

console.log(comparaN(4,3)); // exibi 4

// refactory 1  operaçao ternaria aplicada

function comparaN2 (N1 , N2){
 return N1 > N2 ? N1 : N2; 
// se n1 maior q n2 retorna n1 senao n2
}
console.log(comparaN2(10,3)); // exibi 10

// refactory 2 arrow function

const max = (N1 , N2) => N1 > N2 ? N1 : N2; ;
console.log(max(100,5)); // exibi 100
//--------------------------------------------------
/* escreva uma função chamada ePaisagem que recebe 2 argumento
largura e altura de uma imagem (number) 
retorna true se a imagem estiver no modo paisagem */