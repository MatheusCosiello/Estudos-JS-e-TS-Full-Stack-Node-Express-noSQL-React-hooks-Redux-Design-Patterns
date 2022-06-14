// exemplo de callback para entrega das fases em esquema waterfall
// as fases são executadas na ordem independente do tempo que demore para executar a fase
//a proxima sera entrega apenas quando a anterior for entrege
// gera numero aleatorio
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

/*   function espera(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if (cb) cb();
    }, tempo);
}

espera('fase 1', rand(1, 2), function () {
    espera('fase 2', rand(1, 2), function () {
        espera('fase 3', rand(1, 2), function () {
            console.log('============================================');
        });
    });
}); */
//----------------------mesmo exemplo com promises----------------------------------------
// resolve  responde para .then(); e reject para .catch();
  
  function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      if(typeof msg !== 'string') reject(false);
  
      setTimeout(() => {
        resolve(msg);
      }, tempo);
    });
  }
  
  esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
      console.log(resposta);
      return esperaAi('Buscando dados da BASE', rand(1, 3));
    })
    .then(resposta => {
      console.log(resposta);
      return esperaAi(22222, rand(1, 3)); // erro  if(typeof msg !== 'string') reject(false);
    })
    .then(resposta => {
      console.log(resposta);
    }).then(() => {
      console.log('Exibe dados na tela');
    })
    .catch(e => {
      console.log('ERRO:', e); // resposta do erro
    });
  
  console.log('Isso aqui será exibido antes de qualquer promisse.');
// codigo assincrono não muito intuitivo