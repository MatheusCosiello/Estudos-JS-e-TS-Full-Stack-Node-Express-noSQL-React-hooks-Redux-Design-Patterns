function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
      }

      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, tempo);
  });
}

// esperaAi('Fase 1', rand())
//   .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return fase;
//   })
//   .then(fase => {
//     console.log('Terminamos na fase:', fase);
//   })
//   .catch(e => console.log(e));


//async vai permitir q utilizaemos await dentro de uma funcao para esperar 
// que uma promisse seja finalizada


async function executa() {
  try {
    const fase1 = await esperaAi('FASE 1', rand());
    console.log(fase1);

    const fase2 = await esperaAi(2, rand());  // para de executar aqui
    console.log(fase2);

    const fase3 = await esperaAi('FASE 3', rand());
    console.log(fase3);

    console.log('Terminamos na fase:', fase3);
  } catch(e){
    console.log(e); // exibe o reject
  }
}

executa();

/* estados de uma prommise

1 pendente  -> esta sendo executa e ainda não retornou o valor acontece geralmente quando nao tem await ou then
2 fullfiled -> resolvida
3 rejeitada -> rejeitada

*/