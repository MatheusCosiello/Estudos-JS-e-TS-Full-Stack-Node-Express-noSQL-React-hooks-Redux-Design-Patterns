const numeros = [0,1,2,3,4,5,6,7,8,9];

for ( let numero of numeros){

    if (numero === 2){
        continue;           // continue deixa de exibir o numero 2 
    }                       // pois ele para a leitura do codigo e segue para proxima iteração

    console.log(numero);
    if (numero === 7)       // break esta literamnte parando a iteração
    {                       // se encontrar 7 dentro de numero pare (como esta escrito)
        console.log("parei o laço pois encontrei o 7");                 
        break;
    }
    
}

// funciona em qualquer tipo de for ou laço
// continue vai para proxima iteração
//break sai do laço