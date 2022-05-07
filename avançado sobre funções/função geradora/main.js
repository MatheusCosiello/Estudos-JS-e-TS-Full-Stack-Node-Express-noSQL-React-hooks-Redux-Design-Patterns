//função geradora pode te entregar valores desejados em partes de maneira automatica
//por exemplo eu quero uma função que me retorne os valores de A,B,C
//a cada execução ela ira retornar automaticamente o proximo valor

function* geradora1 () {
 // codigo qualquer
 yield 'valor A'
// codigo qualquer
yield 'valor B'
// codigo qualquer
 yield 'valor C'

 return 'sou o return'

 yield 'valor D'    // porprio vscode defini como codigo não acessivel e não é exibido

}

const g1 = geradora1();
console.log(g1); // exibi Object [Generator] {}

// para trabalhar com a geradora é necessario usar notação de ponto
// o next passa para o proximo yield da execulção
console.log(g1.next().value); // exibi valor A
console.log(g1.next().value); // exibi valor B
console.log(g1.next().value); // exibi valor C
console.log(g1.next());      // exibi { value: undefined, done: true }

// atraves da chave done a função geradora sabe que acabou sua funcionalidade
// tambem podemos utilizar de iteração 

for (let valor of g1){
console.log(valor);             // eixbi valor A valor B valor C
};
//-----------------------------------------------------------------------------
// tambem é possivel fazer uma geradora infinita

function* geradora2 (){
    let i = 0;

    while(true){
        yield i;
        i++ ;
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
// a cada execução  ele entrega um novo valor de I atualizado funcionando como um contador
//------------------------------------------------------------------------------------
// yield tambem pode retornar função
// return faz com que o proximo yield apos ele nao seja lido