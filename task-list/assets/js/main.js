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

// criadora de tarefas
function criaTarefa(textInput){
  const li = criaLi();
  li.innerHTML = textInput;
  tarefas.appendChild(li);
  limpaInput()
}

// captura o evento de click do botao e retorna o valor do input para tarefa
btnTarefa.addEventListener('click', function(){
 if (! inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

// teste