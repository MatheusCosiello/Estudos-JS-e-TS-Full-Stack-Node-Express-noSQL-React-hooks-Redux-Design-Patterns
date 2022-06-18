// func de requisição do obj
const request = obj => {
  return new Promise((resolve, reject) => { // incio da promisses
    const xhr = new XMLHttpRequest(); // construtor do XMLHttpRequest()
    xhr.open(obj.method, obj.url, true); // elementos do objeto a serem abertos
    xhr.send(); // envia aqui os dados de um formulario
                // como estamos fazendo get não é necessario pasasr os dados

  // captura evento load 
    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) { // 200 a 300 http requests
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};
// captura evento de click no documento
document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase(); // converte o nome da tag em letra minuscula

  if (tag === 'a') {  // verifica se a tagtem o nome entriciamente igual a
    e.preventDefault();
    carregaPagina(el);
  }
});
 // execução asyncrona da prommise
async function carregaPagina(el) {
  const href = el.getAttribute('href');

  // objeto e sua configuração
  const objConfig = {
    method: 'GET',
    url: href
  };
// try  e catch da promise
  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch(e) {
    console.log(e);
  }
}

// adiciona as informações de carregadas em response
// dentro da tag que tiver class resultado
function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
