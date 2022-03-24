// controla timer


function monstraHora (){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR');
}


// set interval trabalha com intervalos de relogio

function funcaoDeInterval(){
    console.log(monstraHora());
}

// funcaoDeInterval é executada pelo setInterval
//setInterval(função que eu quero que seja executada,periodo que eu quero q execute ela em Milisegundos)
//setInterval(funcaoDeInterval,1000);

// a maneira mais comum de usar é chamar uma função anonima para nao ter que escrever varias funções
/*
 setInterval(function (){
    console.log(monstraHora());
},1000);

*/

// tambem podemos jogar setInterval em uma variavel e assim podemos chamar setTimout+clearInterval para dar stop

const timer = setInterval(function (){
    console.log(monstraHora());
},1000);


// set timeout funciona de maneira similar a setInterval porem executa apenas por um determinado tempo
// tempo esse que deve ser descrito em milesegundos

// setTimeOut funciona apenas uma vez

setTimeout(function(){clearInterval(timer)},10000)      

// pare o contador da variavel timer em 10000 Milesegundos

//exiba pare aqui em 10000 milesegundos
setTimeout(function(){console.log("pare aqui")},10000)