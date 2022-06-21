/* // utilizando fetch para extrair informações do arquivo json
fetch('pessoas.json')
.then(resposta => resposta.json()) // pegamos a resposta e convertemos em json
.then(json => carregaElementos(json)); // pegamos a nova prommise com valor json e  enviamos para função
 */

// faz a mesma coisa que o fetch
// https://axios-http.com/ptbr/docs/intro
axios('pessoas.json')
.then(resposta => carregaElementos(resposta.data));

// carrega elementos na pagina atraves de um laço no json
function carregaElementos(json){
  const table = document.createElement('table');

for (let pessoa of json){
    const tr = document.createElement('tr'); 

    const td = document.createElement('td'); 
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    const td2 = document.createElement('td'); 
    td2.innerHTML = pessoa.estado;
    tr.appendChild(td2);

    const td3 = document.createElement('td'); 
    td3.innerHTML = pessoa.empresa;
    tr.appendChild(td3);

    const td4 = document.createElement('td'); 
    td4.innerHTML = pessoa.email;
    tr.appendChild(td4);

    table.appendChild(tr);
  }
  const resultado =document.querySelector('.resultado');
  resultado.appendChild(table);
}