const alunos= ["luiz","Maria","joão"];

console.log(alunos);


// lista de funções para manipulação de arrays
//----------------------------------------------------------------------------------------
// exibindo item expecifico do index de alunos 
 console.log(alunos[1]); // exibi Maria
//----------------------------------------------------------------------------------------
// altera Luiz por Eduardo
  alunos[0] = "Eduardo";
//----------------------------------------------------------------------------------------
// foi adicionado a lista o nome Luiza
  alunos[3] = "Luiza";
//-----------------------------------------------------------------------------------------
// ADICIONA AO INICIO DA LISTA
alunos.unshift("Fabio"); // adiciona ao incio da lista
//-----------------------------------------------------------------------------------------
// APAGA O ULTIMO ITEM DA LISTA
alunos.pop(); // apaga o nome joão
 const removido = alunos.pop();
 console.log(removido); // retorna o nome que foi removido -- joão
//-------------------------------------------------------------------------------------------
// REMOVE AO INICIO DA LISTA
alunos.shift(); // REMOVO ao incio da lista
const removido = alunos.shift(); //
console.log(removido); // retorna o valor de Luiz o 1 nome da lista
//-------------------------------------------------------------------------------------------
// remove um iten sem alterar o indice da lista deixando a msg <empty item>/undefined
delete alunos [1]
console.log(alunos); // exibe Luiz, undefined,João
//------------------------------------------------------------------------------------------
// verifica se estou trabalhando com uma instancia de array
console.log(alunos instanceof array); // retorna true
console.log(typeof alunos); // retona como object pois toda array é um objeto