// exericios com FOR

const elementos = [
    {tag : 'p', texto: 'Frase 1'},          //0
    {tag : 'div', texto: 'Frase 2'},        //1
    {tag : 'section', texto: 'Frase 3'},    //2
    {tag : 'footer', texto: 'Frase 4'},     //3
];

const container = document.querySelector(".container");  // seleciona a classe conteiner
const div = document.createElement('div');

// iterar os elementos do array elementos iterar = percorrer

for (let i = 0; i < elementos.length; i++){
    let {tag,texto} = elementos[i];
    let tagCreate = document.createElement(tag);
    let textCreate = document.createTextNode(texto);

    tagCreate.appendChild(textCreate);
    div.appendChild(tagCreate);
}
container.appendChild(div);



