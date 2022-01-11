// peso / altura x altura

function meuEscopo() {

    const formCLiente = document.getElementById('form');
    const imcCLiente = document.getElementById('resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const pesoCliente = formCLiente.getElementById('peso');
        const alturaCliente = formCLiente.getElementById('altura');
        
        function calculaIMC() {

            pesoCliente / (alturaCliente * alturaCliente);
            
        }
        calculaIMC();
        console.log(pesoCliente);
        console.log(alturaCliente);
        console.log(calculaIMC);

    }


    formCLiente.addEventListener('submit', recebeEventoForm)

} meuEscopo();