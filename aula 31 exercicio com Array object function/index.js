function meuEscopo() { // protegendo os dados globais
    const form = document.querySelector(".form"); // seletor atraves de class html-css
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault(); // prevenir ação padrao do navegador
        const nome = form.querySelector('.nome');
        const sobreNome = form.querySelector('.sobreNome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome : nome.value,
            sobreNome : sobreNome.value,
            peso : peso.value,
            altura : altura.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value},${sobreNome.value},${peso.value},${altura.value}</p>`;
    }
  
    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo();