function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      if(typeof msg !== 'string') 
      {reject('cai no erro');
        return;}
      setTimeout(() => {
        resolve(msg.toUpperCase() +' passei na promisse');
      }, tempo);
    });
  }
  

  // promise.all promise.race promise.reject
/* promise.all
   retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas
   promise.race
   retorna uma promise que resolve ou rejeita assim que uma das promises no iterável resolver ou rejeitar
  promise.reject

*/


  const promises = [
    esperaAi('fase 1',3000),
    esperaAi('fase 2',500),
    esperaAi('fase 3',1000),
    esperaAi(2222,1000),
    'Outro Valor'
  ];

  Promise.race(promises)
  .then((valor)=>{
    console.log(valor);
  })
  .catch((erro) =>{
    console.log(erro)
  })
  