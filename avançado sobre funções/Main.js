// revisao rapida sobre funções

// declaração de funções hoisting

falaOi();


function falaOi(){
    console.log('oi');
}
// function expression

const souUmDado = function(){
    console.log('Eu sou um dado');
}

souUmDado();

// EXEMPLO DE USO DE FUNCTION
// QUE EXECUTA OUTRA FUNCTION COMO PARAMENTRO

function executaFunction(função){
    função();
}

executaFunction(souUmDado);

// arrow function

const arrowFunction = () =>{
    console.log('sou uma Arrow function');
};
arrowFunction();

// função como metodo de objeto

const objeto = {
    falar: function() {
        console.log('Estou falando...')
    }
};
objeto.falar();