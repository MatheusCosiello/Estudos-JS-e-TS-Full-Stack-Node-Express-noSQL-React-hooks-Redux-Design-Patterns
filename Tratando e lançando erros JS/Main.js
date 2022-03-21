// em casos de codigos potencialmente perigosos(retornar erro ou informacao indesejada ou sensivel para o usuario)
// podemos utilizar try e catch


// retorando uma variavel inexistnete com nome variavelInexistente
//console.log(variavelInexistente);

// retornou

/*
c:\workspace\Estudos-JS-e-TS-Full-Stack-Node-Express-noSQL-React-hooks-Redux-Design-Patterns\Tratando e lançando erros JS\Main.js:4
console.log(variavelInexistente);
ReferenceError: variavelInexistente is not defined
*/

// para estes casos utilizamos o seguinte bloco

try {    // tente executar o codigo

    console.log(variavelInexistente);
     
 } catch {   // retorne o codigo abaixo
     
    console.log('variavelInexistente não foi definida')
 }
 
 function soma (x,y) { 
 if (typeof x !== 'number' || typeof y !== 'number')
 { throw ('x e y precisam ser numeros') }
 return x + y;
 }
 
 console.log(soma('j',2));

function soma (x,y) { 
    if (typeof x !== 'number' || typeof y !== 'number')
    { throw new Error ('x e y precisam ser numeros') }
    return x + y;
    }
    

    try{
        console.log(soma('1',2));
    } catch (error){
       // console.log(error);
       console.log('algo mais amigavel ao usuario')
    }