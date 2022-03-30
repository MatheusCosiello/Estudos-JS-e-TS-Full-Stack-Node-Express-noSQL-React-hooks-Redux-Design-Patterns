const inputTarefa = document.querySelector(".container-task-input");    // input entrada de novas task
const btnTarefa = document.querySelector(".button-task-add");            // botão de adicionar novas tasks
const tarefas = document.querySelector(".task-list");                   // locas das tarefas

//cria lista no HTML
function criaLi(){
    const li = document.createElement('li');
    return li;
}

// captura o evento da tecla enter e envia tarefa
inputTarefa.addEventListener('keypress',function(e){
    if (e.keyCode === 13){
        if (! inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

// limpa o input apos enviar tarefa e redefini o focu para o input
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

// botao apagar tarefa
function criaBotaoApagar(li){
    li.innerHTML += ' ';
const botaoApagar = document.createElement('button');
botaoApagar.setAttribute('id','apagar');
botaoApagar.setAttribute('title', 'Apagar');
botaoApagar.classList.add("far");                       // chamando classes para icon
botaoApagar.classList.add("fa-trash-alt");              // chamando classes para icon

li.appendChild(botaoApagar);
}

// criadora de tarefas
function criaTarefa(textInput){
  const li = criaLi();
  li.innerHTML = textInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvaTarefas();
}

// captura o evento de click do botao e retorna o valor do input para tarefa
btnTarefa.addEventListener('click', function(){
 if (! inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

// evento click do botao apagar
// se o evento click acontecer no iten com a class x execute apague o parent dele
//se o evento click acontecer no item com class x remova o pai desse elemento
document.addEventListener('click',function (e){
const el  = e.target;
if (el.classList.contains('fa-trash-alt')){ 
    el.parentElement.remove();
    salvaTarefas(); // chamando salvarTarefas no botao apagar para manipular o localStorage na ação do botao
}
});

// função que salva taferas para nao perder info ao att o navegador
// seleciona todos os elementos li de dentro de tarefas

function salvaTarefas(){
const liTarefas = tarefas.querySelectorAll('li');
const listaDeTarefas = [];

// iterando sobre todos os textos dentro de liTarefas e enviando apra listaDeTarefas

for (let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar','').trim();
    listaDeTarefas.push(tarefaTexto);
    
}

// criando uma string apartir do array e convertendo em JSON
const tarefasJSON = JSON.stringify(listaDeTarefas); 
localStorage.setItem('tarefas',tarefasJSON);
};

// traz informação do localStorage a partir da sua Key
function AdicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
// converte string gerada do json em array
const listaDeTarefas = JSON.parse(tarefas);
// iterando listadeTarefas devolta para o HTML
for (let tarefa of listaDeTarefas){
    criaTarefa(tarefa);
}

}
AdicionaTarefasSalvas();