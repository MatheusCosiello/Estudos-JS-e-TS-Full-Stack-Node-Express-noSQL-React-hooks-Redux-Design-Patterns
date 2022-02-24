const paragrafos = document.querySelector(".paragrafos");   // selecionando classe paragrafos
const ps = paragrafos.querySelectorAll('p');                // selecionando grupo de P dentro de paragramos

const estilosBody = getComputedStyle(document.body);        // func do navegador não funciona no node
const backgroundColorBody = estilosBody.backgroundColor;    // recebendo background color do body


console.log(backgroundColorBody);
/*
getComputedStyle 
pega os estilos computados
tem tudo de estilos que foi computado no css
*/

for (let p of ps){                                   // iterando grupo de p dentro dos apragramos
    p.style.backgroundColor = backgroundColorBody;  // estilizando background do p
    p.style.color = "#FFF" ;                        // estilizando cor do texto
}