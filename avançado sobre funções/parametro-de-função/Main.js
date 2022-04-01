function funcao(){
    console.log(/*arguments[0]*/);
}
funcao('valor',1,2,3,4,5,6,7,8,9,10);
//------------exemplo 1------------------------

function funcaoExemplo1(a,b,c){
    let total = 0;
    for (let argumentos of arguments){
        total += argumentos;
    }
    console.log(total, a,b,c);
}
funcaoExemplo1(0,1,2,3,4,5,6,7,8,9,10); // exibi 55
//-----------------exemplo 2 undefind--------------------

function undefinde(a,b,c,d,e,f,g){
    console.log(a,b,c,d,e,f,g);
}
undefinde('valor',1,2,3);
// exibi  valor 1 2 3 undefined undefined undefined
//--------------------exemplo 3--------------------
function soma(a , b) {
// maneira mais atual  function soma(a , b = 0)
//maneira antiga b = b || 0;
    console.log(a + b);
}

soma(2);
//------------------atribuição via destruturação---------------

function atribuição({nome,sobreNome,idade}){
    console.log(nome,sobreNome,idade);
};
atribuição({nome:'matheus',sobreNome:'cosiello',idade:29});