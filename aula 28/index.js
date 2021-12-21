
// chamada para usuario digitar o numero e indentificando no HTML onde o numero deve aparecer
// chamando tambem o id Texto do HTML
// number convertendo prompt em numero direto
//---------------------------------------------------------------------------------------------------//
const numero = Number(prompt("Digite um numero aqui"));
const numeroTitulo = document.getElementById(`numero-Titulo`);
const texto = document.getElementById(`Texto`);
//---------------------------------------------------------------------------------------------------//
// modifica o numero do titulo padrao do html pelo resultado do nosso prompt
//---------------------------------------------------------------------------------------------------//
numeroTitulo.innerHTML = numero;
//---------------------------------------------------------------------------------------------------//
// modifica nossa palavra texto por perguntas que queremos na string (TEMPMATE STRINGS) <P></P>
//---------------------------------------------------------------------------------------------------//
texto.innerHTML = '';
texto.innerHTML += `<P> O seu numero + 2 é ${(numero + 2)}. </P>`;
texto.innerHTML += `<P> O seu numero elevado a 2 é ${(numero ** 2)}.</P>`;
texto.innerHTML += `<P> A metade do seu numero é ${(numero / 2)}.</P>`;
texto.innerHTML += `<P> O dobro do seu numero é ${(numero * 2)}.</P>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;

//----------------------------------------------------------------------------------------------------//
  // <p> é NaN ${Number.isNaN(numero)}.</P> 

